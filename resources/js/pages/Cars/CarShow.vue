<script setup>
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';
import Navbar from '@/MyComponents/Navbar.vue';
import noImage from '/public/images/no-image-car.svg';
import noImageUser from '/public/images/no-image-user.webp';
import backIcon from '/public/images/back-arrow.png';
import { Calendar } from 'v-calendar';
import 'v-calendar/style.css';

const props = defineProps({
  car: Object,
  unavailableDates: Array,
});

const attributes = computed(() =>
  (props.unavailableDates || []).map(date => ({
    key: date,
    dates: date,
    highlight: {
      color: 'red',
      fillMode: 'solid',
    },
    popover: { label: 'Booked' },
  }))
);
</script>

<template>
  <Navbar :elements="['home', 'cars', 'about']" />

  <div class="bg-gray-50 p-6 max-w-6xl min-h-screen mx-auto mt-10 rounded-xl shadow-md">
    <!-- Back button -->
    <Link href="/cars" class="flex items-center text-black text-lg mb-6 hover:text-gray-700 transition">
      <img class="w-6 h-6 mr-2" :src="backIcon" alt="Back" />
      Back
    </Link>

    <!-- Car Info -->
    <div class="grid md:grid-cols-2 gap-8 mb-10">
      <div class="flex justify-center">
        <img :src="car.image ? `/storage/${car.image}` : noImage" alt="Car Image" class="rounded-xl w-full max-w-md object-cover shadow-lg" />
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <h1 class="text-4xl font-bold text-gray-800 mb-2">{{ car.brand?.name }} {{ car.name }}</h1>
          <p class="text-lg text-gray-500 mb-4">{{ car.category?.name }}</p>

          <div class="flex items-center text-xl font-medium mb-4">
            <span class="text-gray-700 mr-4">${{ car.price }} / Day</span>
            <span class="flex items-center text-yellow-500">
              ★ {{ car.rate }}
            </span>
          </div>

          <div class="mt-6">
        <Link
                :href="`/bookings/add/${car.id}`"
                class="inline-block px-6 py-3 bg-[var(--color-red)] text-white font-semibold rounded-lg hover:bg-[var(--color-red-hover)] transition my-3"
            >
                Book Now
            </Link>
        </div>

        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4">Availability</h2>
          <Calendar
            is-expanded
            :attributes="attributes"
          />
        </div>
      </div>
    </div>

    <!-- Rates & Comments Section -->
    <div class="mt-12">
      <h2 class="text-3xl font-bold mb-6">Reviews</h2>

      <div v-if="car.rates && car.rates.length" class="space-y-6">
        <div v-for="rate in car.rates" :key="rate.id" class="bg-white p-4 rounded-xl shadow-sm flex space-x-4">
          <!-- User Avatar -->
          <img
            :src="rate.user.image ? `/storage/${rate.user.image}`  : noImageUser"
            alt="User Avatar"
            class="w-12 h-12 rounded-full object-cover"
          />

          <div class="flex-1">
            <div class="flex justify-between items-center mb-2">
              <h3 class="font-semibold text-gray-800">{{ rate.user?.name ?? 'User' }}</h3>
              <span class="text-yellow-500 font-semibold">★ {{ rate.rate }}</span>
            </div>
            <p class="text-gray-600">{{ rate.comment }}</p>
          </div>
        </div>
      </div>

      <p v-else class="text-gray-500">No reviews yet.</p>
    </div>
  </div>
</template>
