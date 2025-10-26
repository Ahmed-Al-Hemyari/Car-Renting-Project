<script setup>
    import { ref, onMounted } from 'vue';

    import Navbar from '@/MyComponents/Navbar.vue';
    import Hero from '@/MyComponents/Hero.vue';
    import Search from '@/MyComponents/Search.vue';

    const show = ref(true);

    onMounted(() => {
      setTimeout(() => show.value = false, 4000);
    });
</script>
<template>
  <div class="min-h-screen">
    <Navbar :elements="['home','cars', 'about']"/>
    <div v-if="show && $page?.props?.flash?.success" class="bg-green-100 text-green-800 p-4 rounded mb-4">
      {{ $page?.props?.flash?.success }}
    </div>
    <div v-if="show && $page?.props?.flash?.error" class="bg-red-100 text-red-800 p-4 rounded mb-4">
      {{ $page?.props?.flash?.error }}
    </div>
    <Search route="cars"/>
    <Hero/>
  </div>
</template>
