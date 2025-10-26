<script setup>
    import { onMounted, reactive, defineProps } from 'vue';
    import CarCard from './CarCard.vue';
    
    defineProps({
        cars: Array
    })
</script>

<template>
    <div class=" p-5">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CarCard v-for="car in cars.slice(0, limit || cars.length)" :car="car" :key="car.id"/>
        </div>
    </div>
</template>