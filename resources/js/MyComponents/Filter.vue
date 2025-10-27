<script setup>
import cars from '@/routes/cars'
import FilterImage from '/public/images/filterIcon.png'
import { router, usePage } from '@inertiajs/vue3'
import { ref, computed } from 'vue'

const page = usePage()
const props = defineProps({
    filters: Array,
    brands: Array,
    cars: Array,
})

// Initial query filters (preserve selections)
const filters = ref({
  brand: props.filters?.brand || '',
  category: props.filters?.category || '',
  price: props.filters?.price || '',
  rate: props.filters?.rate || '',
})

// Reactive brand list from backend
const brands = computed(() => props.brands || [])

// Handle filter change
const handleFilterChange = () => {
  const query = Object.fromEntries(
    Object.entries(filters.value).filter(([_, v]) => v !== '')
  )
  router.get('/cars', query, { preserveScroll: true, replace: true })
}

// Reset filters
const resetFilters = () => {
  filters.value = { brand: '', category: '', price: '', rate: '' }
  router.get('/cars', {}, { preserveScroll: true, replace: true })
}
</script>

<template>
  <div class="flex flex-row flex-wrap items-center justify-center mx-3 mb-3 p-2">
    <img class="w-14 h-14 mt-4" :src="FilterImage" alt="">

    <!-- Brand -->
    <select v-model="filters.brand"
            @change="handleFilterChange"
            class="rounded-lg mx-4 border-gray-300 w-48 mt-4">
      <option value="" disabled selected>Brand</option>
      <option v-for="brand in brands" :key="brand.id" :value="brand.name">
        {{ brand.name }}
      </option>
    </select>

    <!-- Category -->
    <select v-model="filters.category"
            @change="handleFilterChange"
            class="rounded-lg mx-4 border-gray-300 w-48 mt-4">
      <option value="" disabled selected>Category</option>
      <option value="hatchback">Hatchback</option>
      <option value="sedan">Sedan</option>
      <option value="suv">SUV</option>
      <option value="van">VAN</option>
    </select>

    <!-- Price -->
    <select v-model="filters.price"
            @change="handleFilterChange"
            class="rounded-lg mx-4 border-gray-300 w-48 mt-4">
      <option value="" disabled selected>Price</option>
      <option value="0-35">≤ 35$</option>
      <option value="35-45">35$ – 45$</option>
      <option value="45-55">45$ – 55$</option>
      <option value="55+">≥ 55$</option>
    </select>

    <!-- Rate -->
    <select v-model="filters.rate"
            @change="handleFilterChange"
            class="rounded-lg mx-4 border-gray-300 w-48 mt-4">
      <option value="" disabled selected>Rate</option>
      <option value="1-2">1.0 – 2.0</option>
      <option value="2-3">2.0 – 3.0</option>
      <option value="3-4">3.0 – 4.0</option>
      <option value="4-4.5">4.0 – 4.5</option>
      <option value="4.5+">> 4.5</option>
    </select>

    <!-- Reset -->
    <button @click="resetFilters"
            class="text-lg text-blue-800 mx-4 mt-4 underline hover:text-blue-600">
      Reset
    </button>
  </div>
</template>
