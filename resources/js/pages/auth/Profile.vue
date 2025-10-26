<script setup>
    // Vue
    import { computed, onMounted, ref } from 'vue';
    import { Link, usePage } from '@inertiajs/vue3';

    // Components
    import Navbar from '@/MyComponents/Navbar.vue';
    import BookingCard from '@/MyComponents/BookingCard.vue';

    // Materials
    import userImage from '/public/images/no-image-user.webp';
    import editIcon from '/public/images/edit.svg';

    const props =  defineProps({
        bookings: Array
    });

    const completedBookings = computed(() =>
        props.bookings.filter(b => b.status === 'completed')
    );
    const activeBookings = computed(() =>
        props.bookings.filter(b => b.status === 'active')
    );

    const user = computed(() => usePage().props.auth.user);


    // Notification
    const show = ref(true);

    onMounted(() => {
      setTimeout(() => show.value = false, 4000);
    });

</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <Navbar :elements="['home', 'cars', 'about']" />

    <!-- Notifications -->
    <div v-if="show && $page?.props?.flash?.success" class="bg-green-100 text-green-800 p-4 rounded mb-4">
      {{ $page?.props?.flash?.success }}
    </div>
    <div v-if="show && $page?.props?.flash?.error" class="bg-green-100 text-red-800 p-4 rounded mb-4">
      {{ $page?.props?.flash?.error }}
    </div>

    <!-- Profile Container -->
    <section class="max-w-4xl mx-auto mt-10 p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
      <!-- Header -->
      <div class="flex flex-col md:flex-row items-center justify-between mb-10">
        <div class="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
          <!-- Avatar -->
          <img
            class="w-28 h-28 rounded-full object-cover border-4 border-blue-100 shadow-sm"
            :src="user.image ? `/storage/${user.image}` : userImage"
            alt="Profile photo"
          />
          <div>
            <div class="flex items-center justify-center md:justify-start space-x-3">
              <h1 class="text-3xl font-bold text-gray-900">{{ user.name }}</h1>
              <Link
                :href="'/profile/edit'"
                class="p-2 rounded-full hover:bg-blue-50 transition"
                title="Edit Profile"
              >
                <img class="w-5" :src="editIcon" alt="Edit profile" />
              </Link>
            </div>
            <p class="text-gray-600">{{ user.email }}</p>
            <Link :href="`/profile/password/reset/${user.id}`" class="text-[var(--color-red)] hover:text-[var(--color-red-hove)] mt-2 text-sm">Update Password</Link>
          </div>
        </div>
      </div>

      <hr class="my-8 border-gray-300" />

      <!-- Booking Summary -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-center">
        <div class="p-4 bg-blue-50 rounded-xl">
          <p class="text-gray-500 text-sm">Total Bookings</p>
          <p class="text-2xl font-semibold text-blue-600">{{ bookings.length }}</p>
        </div>
        <div class="p-4 bg-green-50 rounded-xl">
          <p class="text-gray-500 text-sm">Active</p>
          <p class="text-2xl font-semibold text-green-600">
            {{ activeBookings.length }}
          </p>
        </div>
        <div class="p-4 bg-gray-100 rounded-xl hidden md:block">
          <p class="text-gray-500 text-sm">Completed</p>
          <p class="text-2xl font-semibold text-gray-700">
            {{ completedBookings.length }}
          </p>
        </div>
      </div>

      <!-- Bookings -->
      <div v-if="!bookings || bookings.length === 0" class="text-center py-16 text-2xl text-gray-400 font-semibold">
        No bookings found.
      </div>
      <transition-group
        name="fade"
        tag="div"
        class="grid gap-6"
        v-else
      >
        <BookingCard
          v-for="booking in bookings"
          :key="booking.id"
          :booking="booking"
        />
      </transition-group>
    </section>
  </div>
</template>