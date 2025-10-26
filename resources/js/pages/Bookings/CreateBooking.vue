<script setup>
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { computed, ref, watch } from 'vue';
import noImage from '/public/images/no-image-car.svg';
import backIcon from '/public/images/back-arrow.png';
import Navbar from '@/MyComponents/Navbar.vue';

const user = usePage().props.auth.user;
const props = defineProps({
    car: Object
});

const form = useForm({
    user_id: user.id,
    start_date: '',
    end_date: '',
    total_price: 0,
    notes: '',
});

// Compute rental duration in days
const rentalDuration = computed(() => {
    if (!form.start_date || !form.end_date) return 0;
    const start = new Date(form.start_date);
    const end = new Date(form.end_date);
    const diffMs = end - start;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
});

// Compute total price dynamically
const totalPrice = computed(() => rentalDuration.value * (props.car?.price || 0));

// Update total price automatically whenever dates change
watch([() => form.start_date, () => form.end_date], () => {
    form.total_price = totalPrice.value;
});

const submit = () => {
    form.post(`/bookings/add/${props.car.id}`);
};
</script>

<template>
<Navbar :elements="['home','cars','about']"/>

<div class="bg-gray-50 p-6 rounded-xl max-w-3xl mx-auto mt-10 shadow-lg">
    <!-- Back Button -->
    <Link href="/cars" class="flex items-center text-black text-lg mb-6 hover:text-gray-700 transition">
        <img class="w-6 h-6 mr-2" :src="backIcon" alt="Back" />
        Back to Cars
    </Link>

    <!-- Car Info -->
    <div class="text-center mb-8">
        <img :src="car.image ? `/storage/${car.image}` : noImage" alt="Car" class="w-full max-w-md mx-auto rounded-xl shadow-md object-cover" />
        <h2 class="text-4xl font-bold text-gray-800 mt-4">{{ car.brand.name }} {{ car.name }}</h2>
        <p class="text-lg text-gray-500">{{ car.category.name }}</p>
        <div class="flex justify-center items-center mt-2 space-x-6 text-xl font-medium">
            <span class="text-gray-700">${{ car.price }} / Day</span>
            <span class="flex items-center text-yellow-500">★ {{ car.rate }}</span>
        </div>
    </div>

    <!-- Booking Form -->
    <form @submit.prevent="submit" class="space-y-6">
        <!-- Pick-Up -->
        <div>
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">Pick-Up Date</h3>
            <input
                v-model="form.start_date"
                type="date"
                class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-red)] focus:ring-[var(--color-red)] focus:ring-opacity-20"
            />
            <p class="text-red-500 text-sm mt-1">{{ form.errors.start_date }}</p>
        </div>

        <!-- Return -->
        <div>
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">Return Date</h3>
            <input
                v-model="form.end_date"
                type="date"
                class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-red)] focus:ring-[var(--color-red)] focus:ring-opacity-20"
            />
            <p class="text-red-500 text-sm mt-1">{{ form.errors.end_date }}</p>
        </div>

        <!-- Rental Summary -->
        <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">Rental Summary</h3>
            <div class="flex justify-between items-center text-lg font-medium">
                <span>Duration:</span>
                <span class="text-[var(--color-red)]">{{ rentalDuration }} Days</span>
            </div>
            <div class="flex justify-between items-center text-lg font-medium mt-1">
                <span>Total Price:</span>
                <span class="text-[var(--color-red)]">${{ totalPrice }}</span>
            </div>
        </div>

        <!-- Notes -->
        <div>
            <textarea
                v-model="form.notes"
                placeholder="Notes..."
                class="w-full h-36 p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-red)] focus:ring-[var(--color-red)] focus:ring-opacity-20"
            ></textarea>
        </div>

        <!-- Submit -->
        <button
            type="submit"
            :disabled="form.processing"
            class="w-full bg-[var(--color-red)] hover:bg-[var(--color-red-hover)] text-white font-semibold text-xl p-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
            Book Now
        </button>
    </form>
</div>
</template>
