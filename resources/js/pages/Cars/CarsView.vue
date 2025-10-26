<script setup>
    import Navbar from '@/MyComponents/Navbar.vue';
    import Search from '@/MyComponents/Search.vue';
    import CarList from '@/MyComponents/CarList.vue';
    import Filter from '@/MyComponents/Filter.vue';
    
    const props = defineProps({
        cars: Array,
    })
</script>
<template>
    <div class="min-h-screen">
        <Navbar :elements="['home', 'cars', 'about']"/>
        <Search route="cars"/>
        <Filter/>
        <CarList v-if="cars.length != 0" :cars="cars"/>
        <p v-else class="text-center text-gray-500 italic py-6">
        No cars found
        </p>
    </div>
</template>