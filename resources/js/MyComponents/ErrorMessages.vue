<script setup>
    defineProps({
        errors: Object
    })
</script>

<template>
    <div class="mb-4" v-if="Object.keys(errors).length">
        <p class="text-sm text-red-500">Something went wrong!</p>
        <ul>
            <li v-for="(error, i) in errors" :key="i" class="text-sm text-red-500">{{error}}</li>
        </ul>
    </div>
</template>