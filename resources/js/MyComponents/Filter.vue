<script setup>
    import FilterImage from '/public/images/filterIcon.png'
    import { router } from '@inertiajs/vue3'
    import { ref } from 'vue'

    const selectedBrand = ref('')
    const selectedCategory = ref('')
    // const selectedAvailability = ref('')
    const selectedPrice = ref('')
    const selectedRate = ref('')

    const handleFilterChange = (event) => {
        const param = event.target.name
        const value = event.target.value

        if (param === 'brand') selectedBrand.value = value
        if (param === 'category') selectedCategory.value = value
        // if (param === 'availability') selectedAvailability.value = value
        if (param === 'price') selectedPrice.value = value
        if (param === 'rate') selectedRate.value = value

        const query = new URLSearchParams()
        if (selectedBrand.value) query.append('brand', selectedBrand.value)
        if (selectedCategory.value) query.append('category', selectedCategory.value)
        // if (selectedAvailability.value) query.append('availability', selectedAvailability.value)
        if (selectedPrice.value) query.append('price', selectedPrice.value)
        if (selectedRate.value) query.append('rate', selectedRate.value)

        router.visit(`/cars/?${query.toString()}`)
    }
</script>

<template>
    <div class="flex flex-row flex-wrap items-center justify-center mx-3 mb-3 p-2">
        <img class="w-14 h-14 mt-4" :src="FilterImage" alt="">
        <select @change="handleFilterChange" class="rounded-lg mx-4 border-gray-300 w-48  mt-4" name="brand" id="brand">
            <option value="brand" selected disabled>Brand</option>
            <option value="Toyota">Toyota</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Kia">Kia</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Mazda">Mazda</option>
            <option value="Nissan">Nissan</option>
        </select>
        <select @change="handleFilterChange" class="rounded-lg mx-4 border-gray-300 w-48  mt-4" name="category" id="category">
            <option value="category" selected disabled>Category</option>
            <option value="hatchback">Hatchback</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="van">VAN</option>
        </select>
        <!-- <select @change="handleFilterChange" class="rounded-lg mx-4 border-gray-300 w-48  mt-4" name="availability" id="availability">
            <option value="availability" selected disabled>Availability</option>
            <option value="available">Availabile</option>
            <option value="unavailable">Not Availabile</option>
        </select> -->
        <select @change="handleFilterChange" class="rounded-lg mx-4 border-gray-300 w-48  mt-4" name="price" id="price">
            <option value="price" selected disabled>Price</option>
            <option value="0.0">35$ and Less</option>
            <option value="35">35$ to 45$</option>
            <option value="45">45$ to 55$</option>
            <option value="55">Over 55$</option>
        </select>
        <select @change="handleFilterChange" class="rounded-lg mx-4 border-gray-300 w-48  mt-4" name="rate" id="rate">
            <option value="rate" selected disabled>Rate</option>
            <option value="2.0">1.0 - 2.0</option>
            <option value="3.0">2.0 - 3.0</option>
            <option value="4.0">3.0 - 4.0</option>
            <option value="4.5">4.0 - 4.5</option>
            <option value="5.0">Over 4.5</option>
        </select>
        <button @click="router.get('/cars')" class="text-lg text-blue-800 mx-4 mt-4">Reset</button>
    </div>
</template>