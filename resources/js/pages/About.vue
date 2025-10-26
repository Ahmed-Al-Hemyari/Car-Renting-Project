<script setup>
    import Navbar from '@/MyComponents/Navbar.vue';
</script>
<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Navbar -->
    <Navbar :elements="['home', 'cars', 'about']" />

    <!-- Main content -->
    <section class="max-w-5xl mx-auto px-6 py-16">
      <!-- Intro -->
      <div class="text-center mb-16">
        <h1
          class="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#941b1d] to-rose-700 text-transparent bg-clip-text"
        >
          About Us
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Driven by convenience, powered by trust — we’re here to redefine the
          way you rent cars.
        </p>
      </div>

      <!-- Mission -->
      <div
        class="bg-white rounded-2xl shadow-md p-8 md:p-12 mb-16 border-t-4 border-[#941b1d] hover:shadow-lg transition-shadow duration-300"
      >
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Our company was founded with a simple mission: to make car rental
          effortless, reliable, and tailored to your needs. Whether you're
          planning a weekend escape, attending a business meeting, or navigating
          daily life, we offer a wide selection of vehicles to match your
          journey — from fuel-efficient compacts to spacious SUVs and premium
          sedans.
        </p>

        <p class="text-lg text-gray-700 leading-relaxed">
          Every vehicle in our fleet is carefully maintained, thoroughly
          cleaned, and regularly inspected to ensure safety and comfort. Our
          team is passionate about delivering a smooth experience from the
          moment you book to the moment you return the keys.
        </p>
      </div>

      <!-- Why Choose Us -->
      <div class="text-center mb-12">
        <h2
          class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 relative inline-block"
        >
          Why Choose Us?
          <span
            class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#941b1d] rounded-full"
          ></span>
        </h2>
      </div>

      <ul class="grid md:grid-cols-2 gap-6 mb-16">
        <li
          v-for="(item, i) in benefits"
          :key="i"
          class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 border-l-4 border-[#941b1d]"
        >
          <div
            class="w-10 h-10 flex items-center justify-center rounded-full bg-[#941b1d]/10 text-[#941b1d] text-xl font-bold shrink-0"
          >
            {{ i + 1 }}
          </div>
          <p class="text-lg text-gray-700 text-left leading-relaxed">
            {{ item }}
          </p>
        </li>
      </ul>

      <!-- Closing paragraph -->
      <div
        class="bg-gradient-to-r from-[#941b1d] to-rose-800 text-white p-8 md:p-12 rounded-2xl shadow-md"
      >
        <p class="text-lg leading-relaxed text-center">
          Our mission is to redefine car rental by combining technology,
          comfort, and customer care. Every vehicle is thoroughly inspected,
          every interaction designed to be seamless — because we believe renting
          a car should feel as effortless as driving one.
        </p>
      </div>
    </section>
  </div>
</template>
