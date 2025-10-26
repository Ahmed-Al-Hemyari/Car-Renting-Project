<script setup>
import { computed, ref } from 'vue'
import { router, usePage, Link } from '@inertiajs/vue3'
import noImage from '/public/images/no-image-car.svg'

const props = defineProps({
  booking: Object,
})

// Loading state to disable buttons during actions
const isProcessing = ref(false)

// Access Laravel flash messages if available
const page = usePage()

const canBeCancelled = computed(() =>
  ['pending', 'confirmed'].includes(props.booking.status)
)

// Dynamic status styling
const statusClasses = computed(() => {
  const base = 'capitalize py-1 px-3 rounded-full text-sm font-medium'
  switch (props.booking.status) {
    case 'pending':
      return `${base} bg-yellow-100 text-yellow-700`
    case 'confirmed':
      return `${base} bg-blue-100 text-blue-700`
    case 'cancelled':
      return `${base} bg-red-100 text-red-700`
    case 'refused':
      return `${base} bg-rose-100 text-rose-700`
    case 'active':
      return `${base} bg-green-100 text-green-700`
    case 'expired':
      return `${base} bg-gray-100 text-gray-700`
    case 'late':
      return `${base} bg-orange-100 text-orange-700`
    default:
      return `${base} bg-gray-100 text-gray-700`
  }
})

const formatDate = (date) => {
  if (!date) return '—'
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// Cancel booking
const cancel = () => {
  if (!confirm('Are you sure you want to cancel this booking?')) return
  isProcessing.value = true

  router.post(`/bookings/cancel/${props.booking.id}`, {}, {
    preserveScroll: true,
    onFinish: () => (isProcessing.value = false),
    onError: () => alert('Failed to cancel booking. Please try again.')
  })
}

// Delete booking
// const deleteBooking = () => {
//   if (!confirm('Are you sure you want to delete this booking?')) return
//   isProcessing.value = true

//   router.delete(`/bookings/delete/${props.booking.id}`, {
//     preserveScroll: true,
//     onFinish: () => (isProcessing.value = false),
//     onError: () => alert('Failed to delete booking. Please try again.')
//   })
// }
</script>


<template>
  <div
    class="flex flex-col md:flex-row justify-between bg-white border border-gray-200 
           hover:shadow-lg transition rounded-2xl p-4 w-full mx-auto my-3"
  >
    <!-- Booking Info -->
    <div class="flex flex-col md:flex-row items-center w-full">
      <!-- Car Image -->
      <div class="flex-shrink-0">
        <img
          class="mx-auto md:mr-4 w-32 h-24 object-cover rounded-xl border border-gray-200 bg-gray-50"
          :src="props.booking.car.image ? `/storage/${props.booking.car.image}` : noImage"
          alt="Car image"
        />
      </div>

      <!-- Booking Details -->
      <div
        class="flex flex-col justify-between w-full md:w-auto mt-4 md:mt-0 text-center md:text-left space-y-3"
      >
        <h1 class="text-lg font-semibold text-gray-700">
          Booking <span class="text-blue-600">#{{ props.booking.id }}</span>
        </h1>

        <h2 class="text-2xl font-bold text-gray-800">
          {{ props.booking.car?.brand?.name }} {{ props.booking.car?.name }}
          <span class="text-gray-500 text-sm font-normal">
            ({{ props.booking.car?.category?.name }})
          </span>
        </h2>

        <p
          class="inline-block capitalize py-1 px-4 rounded-full text-sm font-medium"
          :class="statusClasses"
        >
          {{ props.booking.status }}
        </p>

        <p class="text-sm text-gray-600">
          <span class="font-medium text-gray-700">From:</span>
          {{ formatDate(props.booking.start_date) }}
          <span class="mx-1 text-gray-400">–</span>
          <span class="font-medium text-gray-700">To:</span>
          {{ formatDate(props.booking.end_date) }}
        </p>
      </div>
    </div>

    <!-- Actions -->
    <div
      class="flex flex-row md:flex-col items-center justify-center space-x-2 md:space-x-0 md:space-y-3 mt-5 md:mt-0"
    >
      <form @submit.prevent="cancel" v-if="canBeCancelled">
        <button
          type="submit"
          class="px-5 py-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 
                 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
        >
          Cancel
        </button>
      </form>

      <Link v-else-if="booking.status === 'completed' && booking.rated === 0" :href="`/rates/${booking.id}`" class="px-5 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 transition">
          Rate
      </Link>

      <form v-else>
        <button
          class="px-5 py-2 text-sm font-medium text-white bg-gray-400 rounded-lg cursor-not-allowed"
          disabled
        >
          Cancel
        </button>
      </form>



      <!-- <form @submit.prevent="deleteBooking">
        <button
          type="submit"
          class="px-5 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 
                 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
        >
          Delete
        </button>
      </form> -->
    </div>
  </div>
</template>
