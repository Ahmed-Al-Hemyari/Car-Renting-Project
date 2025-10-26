<script setup>
    // Vue
    import { computed } from 'vue';
    import { Link, usePage } from '@inertiajs/vue3';

    // Components
    import Navbar from '@/Components/Navbar.vue';
    import BookingCard from '@/Components/BookingCard.vue';

    // Materials
    import userImage from '/public/images/no-image-user.jpg';
    import editIcon from '/public/images/edit.svg';

    const props = defineProps({
        bookings: Array,
    })

    
    const user = computed(() => usePage().props.auth.user);
</script>

<template>
    <Navbar :elements="['home', 'cars', 'about']"/>
    <div class="flex flex-col bg-gray-50 border border-gray-200 p-5 rounded-xl max-w-3xl mx-auto my-10 shadow-md">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="flex flex-col mx-auto md:flex-row items-center justify-center space-y-5 md:space-x-8 md:space-y-0 mb-6">
                <img class="w-28 h-28 object-cover" :src="user.image ? `/storage/${user.image}` : userImage" alt="">
                <div class="flex flex-col items-center md:items-start m-0 p-0">
                    <div class="flex flex-row space-x-3">
                        <h1 class="text-4xl mb-2 font-bold">{{ user.name }}</h1>
                        <Link class="mb-2" :href="route('profile.edit')">
                            <img class="w-5" :src="editIcon" alt="">
                        </Link>
                    </div>
                    <h1 class="text-gray-700 text-lg">{{ user.email }}</h1>
                </div>
            </div>
            <!-- <div class="flex flex-row md:flex-col items-center justify-center mx-auto md:mx-0 space-x-8 md:space-y-8 md:space-x-0">

                <button class="m-0">
                    <img class="w-6" :src="deleteIcon" alt="">
                </button>
            </div> -->
        </div>
        <hr class="mb-16 mt-5 border-gray-300"/>
        <div v-if="!props.bookings || props.bookings.length === 0" class="h-32 mb-10 flex items-center mx-auto text-3xl font-bold">
            No Bookings Found
        </div>
        <BookingCard 
            v-else 
            v-for="booking in bookings"
            :booking="booking"
        />
    </div>
</template>