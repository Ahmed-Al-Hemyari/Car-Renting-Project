<script setup>
    import Navbar from '@/Components/Navbar.vue';   
    import noImage from '/public/images/no-image-car.svg';

    const props = defineProps({
        bookings: Array,
    })

</script>
<template>
    <Navbar :elements="['home', 'cars', 'about']"/>
    <div 
        v-for="booking in bookings" 
        class="flex flex-col justify-between md:flex-row bg-gray-50 border border-gray-200 p-3 rounded-xl max-w-3xl mx-auto my-10 shadow-md"
    >
        <img 
            class="mx-auto md:mr-2 w-2/12" 
            :src="booking.car.image ? booking.car.image : noImage" 
            alt=""
        >
        <div
            class="w-10/12 flex flex-col items-center text-center mx-auto md:ml-5 my-2 md:text-left md:items-start md:h-36 md:justify-around space-y-3"
        >
            <h2 class="text-3xl font-bold text-gray-800">
                {{ booking.car.brand }} {{ booking.car.name }} - {{ booking.car.category }}
            </h2>
            <!-- <span class="flex items-center text-yellow-500 my-1">
                ★ {{ booking.car.rate }}
            </span> -->
            <p class="text-md bg-yellow-200 py-1 px-3 rounded-full text-yellow-600">
                pending
            </p>
            <p class="text-md text-gray-500">
                <span>
                    From: {{ booking.start_date }} -
                </span>
                <span>
                    To: {{ booking.end_date }}
                </span>
            </p>
        </div>
    </div>
</template>