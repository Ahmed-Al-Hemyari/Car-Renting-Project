<script setup>
import Navbar from '@/MyComponents/Navbar.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue'

const props = defineProps({
    booking: Object
});

const hoverRating = ref(0)

const form = useForm({
    booking_id: props.booking.id,
    car_id: props.booking.car_id,
    rate: null, // start as null so Laravel sees it missing if user doesn't pick
    comment: '',
});

const submitForm = () => {
    if (!form.rate) {
        alert("Please select a rating before submitting!");
        return;
    }
    form.post(`/rates/${props.booking.id}`)
}
</script>

<template>
    <Navbar :elements="['home', 'cars', 'about']"/>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <form @submit.prevent="submitForm" class="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">Rate & Comment</h2>

            <!-- Star Rating -->
            <div class="flex items-center justify-center mb-2">
                <span class="mr-2 text-gray-700 font-medium">Your Rating:</span>
                <div class="flex space-x-1">
                <button 
                    v-for="starIndex in 5" 
                    :key="starIndex" 
                    type="button" 
                    @click="form.rate = starIndex" 
                    @mouseover="hoverRating = starIndex" 
                    @mouseleave="hoverRating = form.rate"
                    class="text-2xl focus:outline-none transition-colors"
                    :class="(starIndex <= hoverRating) ? 'text-yellow-400' : 'text-gray-300'"
                >
                    ★
                </button>

                </div>
            </div>
            <p class="text-red-500 text-xs mb-4">
                {{ form.errors.rate }}
            </p>

            <!-- Comment -->
            <div class="mb-4">
                <label for="comment" class="block text-gray-700 font-medium mb-2">Your Comment</label>
                <textarea 
                    id="comment" 
                    v-model="form.comment" 
                    rows="4" 
                    placeholder="Write your comment..." 
                    class="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 resize-none"
                ></textarea>
                <p class="text-red-500 text-xs mt-1">
                    {{ form.errors.comment }}
                </p>
            </div>

            <!-- Submit Button -->
            <button 
                type="submit" 
                class="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors"
                :disabled="form.processing"
            >
                Submit
            </button>
        </form>
    </div>
</template>
