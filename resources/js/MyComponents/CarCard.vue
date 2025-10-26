<script setup>
    import { defineProps } from 'vue';
    import { Link } from '@inertiajs/vue3';
    import noImage from '/public/images/no-image-car.svg'

    const props = defineProps({
        car: Array
    });

</script>

<template>
        <div class="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between gap-4 w-full max-w-md mx-auto">
            <!-- Car Icon (optional) -->
            <div class="flex justify-center">
                <img
                    :src="car.image ? `/storage/${car.image}` : noImage"
                    alt="Car icon"
                    class="w-full h-60 object-cover rounded-xl border border-gray-200 shadow-sm"
                />
            </div>

            <!-- Title & Category -->
            <div class="text-center">
                <h2 class="text-2xl font-bold text-gray-800">{{ car.brand?.name }} {{ car.name }}</h2>
                <p class="text-sm text-gray-500">{{ car.category?.name }}</p>
            </div>

            <!-- Availability -->
            <!-- <div class="flex flex-col justify-center items-center">
                <span
                class="text-3xl mr-2"
                :class="car.availability_date === null
                ? 'text-green-600'
                : new Date(car.availability_date) < new Date()
                    ? 'text-green-600'
                    : 'text-red-600'"
                aria-hidden="true"
                >●</span>

                <span class="text-lg font-semibold">
                    {{ new Date(car.availability_date) < new Date() 
                        ? 'Available' 
                        : 'Unavailable' 
                    }}
                </span>
                <span class="whitespace-pre-line text-center">
                    {{ 
                        new Date(car.availability_date) < new Date() 
                        ? '' 
                        : `Available from\n ${car.availability_date}` 
                    }}
                </span>
            </div> -->

            <!-- Price & Rating -->
            <div class="flex flex-col items-center text-lg font-medium">
                <span class="flex items-center text-yellow-500">
                    ★ {{ car.rate }}
                </span>
                <span class="text-gray-700">${{ car.price }} / Day</span>
            </div>

            <!-- CTA Button -->
            <Link
                class="bg-[var(--color-red)] text-white text-center py-2 px-4 rounded-lg hover:bg-[var(--color-red-hover)] transition"
                :href="`/cars/${car.id}`"
            >
                Rent
            </Link>
        </div>

        <!-- <div class="text-md">
            Description
            <button class="text-[var(--color-Red)]" @click="toggleFullDescription">{{ showFullDescription ? "Less" : "More" }}</button>
        </div> -->
        
        <!-- <div class="w-full my-1 p-1 space-x-2 flex flex-row justify-between items-center">
            <a :href="`/cars/${car['id']}`" class="p-3 mx-auto bg-[var(--color-Red)] text-center text-white rounded-xl">Rent Now →</a>
        </div> -->
    <!-- </div> -->
</template>