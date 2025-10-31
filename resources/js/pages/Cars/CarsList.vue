<script setup>
    import Navbar from '@/MyComponents/Navbar.vue';
    import Search from '@/MyComponents/Search.vue';
    import Filter from '@/MyComponents/Filter.vue';
    import CarCard from '@/MyComponents/CarCard.vue';
    
    const props = defineProps({
        cars: Array,
        brands: Array,
        filters: Array,
    })
</script>
<template>
    <div class="min-h-screen">
        <Navbar :elements="['home', 'cars', 'about']"/>
        <Search route="cars"/>
        <Filter :brands="brands" :filters="filters" />

        <div v-if="cars.data.length" class="p-5">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CarCard
            v-for="car in cars.data.slice(0, limit || cars.data.length)"
            :key="car.id"
            :car="car"
            />
        </div>
        </div>

        <p v-else class="text-center text-gray-500 italic py-6">
        No cars found
        </p>
    </div>
</template>