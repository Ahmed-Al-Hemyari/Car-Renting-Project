<script setup>
    import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
    import logo from '/public/images/logo.png';
    import userImage from '/public/images/no-image-user.webp';
    import { Link, router, usePage } from '@inertiajs/vue3';

    const props =  defineProps({
        elements: Array
    });

    const user = computed(() => usePage().props.auth.user);
    const showOptions = ref(false);
    const profileContainer = ref(null);
    
    const logout = () => {
        router.post('/logout');
    }


    const toggleOptions = () => {
    showOptions.value = !showOptions.value
    }

    const handleClickOutside = (event) => {
    if (profileContainer.value && !profileContainer.value.contains(event.target)) {
        showOptions.value = false
    }
    }

    onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    })

    onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
    })
</script>

<template>
    <nav class="flex justify-between items-center p-5  bg-gray-900">
        <Link href="/" class="mr-5">
            <img class="w-24" :src="logo" alt=""/>
        </Link>
        <ul class="flex items-center space-x-6 mr-6 text-lg">
            <li v-for="element in elements" :key="element">
                <Link :href="element === 'home' ? '/' : `/${element}`" class="text-lg sm:text-xl text-white  font-medium hover:text-[var(--color-red)]">
                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
                    <span class="capitalize">{{element}}</span>
                </Link>
            </li>

            
            <li v-if="user">
                <div class="relative inline-block ml-7" ref="profileContainer">
                    <!-- Profile button -->
                    <div
                        class="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-105"
                        @click="toggleOptions"
                    >
                        <div
                        class="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white ring-offset-2"
                        >
                        <img
                            :src="user.image ? `/storage/${user.image}` : userImage"
                            alt="Profile"
                            class="w-full h-full object-cover"
                        />
                        </div>
                        <p class="text-white text-sm font-medium mt-1">
                        {{ user.name }}
                        </p>
                    </div>

                    <!-- Dropdown menu -->
                    <transition
                        enter-active-class="transition ease-out duration-200"
                        enter-from-class="opacity-0 translate-y-1"
                        enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition ease-in duration-150"
                        leave-from-class="opacity-100 translate-y-0"
                        leave-to-class="opacity-0 translate-y-1"
                    >
                        <div
                        v-if="showOptions"
                        class="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg z-20 border border-gray-100"
                        >
                        <div class="py-2">
                            <Link
                            :href="'/profile'"
                            class="block text-sm px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-[#941b1d] transition-colors"
                            >
                            Profile
                            </Link>

                            <Link
                            v-if="user.admin === 1"
                            :href="'/dashboard'"
                            class="block text-sm px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-[#941b1d] transition-colors"
                            >
                            Dashboard
                            </Link>

                            <hr class="my-1 border-gray-200" />

                            <button
                            class="w-full text-left text-sm px-4 py-2 text-red-600 hover:bg-rose-50 hover:text-[#941b1d] transition-colors"
                            @click="logout"
                            >
                            Logout
                            </button>
                        </div>
                        </div>
                    </transition>
                </div>

                <!-- <div class="relative inline-block ml-7" ref="profileContainer">
                    <div class="flex flex-col justify-center cursor-pointer" @click="toggleOptions">
                        <img class="w-8 border-black mx-auto cursor-pointer" :src="userImage" alt="Profile" />
                        <p class="text-white text-sm text-center">{{ user.name }}</p>
                    </div>
                
                    <div v-if="showOptions" class="absolute top-full left-0 mt-2 bg-white shadow-md rounded p-2 space-y-1 z-10">
                        <Link :href="'/profile'" class="text-sm px-2 py-1 text-gray-500 rounded">
                            Profile
                        </Link>
                        <Link v-if="user.role === 1" :href="'/management'" class="text-sm px-2 py-1 text-gray-500 rounded">
                            Dashboard
                        </Link>
                        <hr>
                        <button class="text-sm px-2 py-1 0 text-red-500 rounded" @click="logout">
                            Logout
                        </button>
                    </div>
                </div> -->
            </li>
            <li v-else>
                <Link href="/login"
                method="get" as="button" 
                class="bg-[var(--color-red)] hover:bg-[var(--color-red-hover)] text-md text-white px-4 py-2 rounded-full">
                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
                    Login
                </Link>
            </li>
        </ul>
    </nav>
</template>