<script setup>
    import heroCar from '/public/images/hero-car.png';
    import safety from '/public/images/safety.svg';
    import eco from '/public/images/eco.svg';
    import mobile from '/public/images/mobile.svg';
</script>

<template>
    <section class="relative bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 overflow-hidden">
        <div class="flex flex-col-reverse md:flex-row items-center justify-center max-w-7xl mx-auto px-6 lg:px-12">
            <!-- Text Content -->
            <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-6 w-full md:w-1/2">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span class="text-[var(--color-red)]">Rent</span>. <span class="text-gray-900">Ride</span>. <span class="text-[var(--color-red)]">Repeat</span>.
            </h1>
            <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium max-w-xl">
                Discover, book, and enjoy — modern car rentals made simple and smart.
            </p>
            <a href="/cars"
                class="bg-[var(--color-red)] hover:bg-[var(--color-red)]/90 transition-all text-lg font-semibold text-white py-3 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105">
                Explore Cars →
            </a>
            </div>

            <!-- Hero Image -->
            <div class="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <img :src="heroCar"
                alt="Featured car"
                class="w-96 max-w-full drop-shadow-2xl hover:scale-105 transition-transform duration-500">
            </div>
        </div>

        <!-- Decorative line -->
        <hr class="mx-auto w-9/12 border-gray-300 my-20"/>

        <!-- Feature Highlights -->
        <div class="max-w-6xl mx-auto px-6 lg:px-12">
            <ul class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <li class="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
                <img class="w-20 mb-2" :src="safety" alt="">
                <h2 class="text-2xl font-bold text-[var(--color-red)]">Insurance & Safety</h2>
                <p class="text-gray-700 text-lg">Drive with confidence — coverage included.</p>
            </li>

            <li class="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
                <img class="w-20 mb-2" :src="eco" alt="">
                <h2 class="text-2xl font-bold text-[var(--color-red)]">Eco-Friendly Options</h2>
                <p class="text-gray-700 text-lg">Choose hybrid or electric — drive clean, save green.</p>
            </li>

            <li class="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
                <img class="w-20 mb-2" :src="mobile" alt="">
                <h2 class="text-2xl font-bold text-[var(--color-red)]">Mobile Experience</h2>
                <p class="text-gray-700 text-lg">Book, manage, and track your rental from anywhere.</p>
            </li>
            </ul>
        </div>

        <!-- Subtle background accent -->
        <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-[var(--color-red)]/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>

    <!-- <hr class="m-auto w-9/12 "/>
    <div class="flex flex-col items-center justify-center my-25">
        <p class="text-2xl lg:text-4xl text-black font-medium my-15 text-center">Your Journey Begins with the Right Car.</p>
        <a class="bg-[var(--color-red)] text-xl text-white px-15 py-2 rounded-full" href="/cars">Explore Cars →</a>
    </div> -->
</template>




<!-- <div>
    <a
        href="/register"
        class="inline-block border-2 border-white text-white py-2 px-4 rounded-xl uppercase mt-2 hover:text-black hover:border-black"
        >Sign Up to List a Gig</a
    >
</div> -->