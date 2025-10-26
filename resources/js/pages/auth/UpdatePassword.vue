<script setup>
    import {useForm, Link} from '@inertiajs/vue3';
    import logo from '/public/images/logo.png';
    import Navbar from '@/MyComponents/Navbar.vue';

    const props = defineProps({
        user: Object
    });

    const form = useForm({
        old_password: '',
        new_password: '',
        new_password_confirmation: '',
    });

    const submit = () => {
        form.put(`/profile/password/reset/${props.user.id}`);
    };

</script>
<template>
    <Navbar :elements="['home', 'cars', 'about']"/>
        <div
            class=" flex flex-col justify-center min-h-screen "
        >
            <div class="bg-gray-50 border border-gray-200 p-6 rounded-xl max-w-md mx-auto my-10 shadow-md">
                <header class="text-center">
                    <Link href="/">
                        <img class="w-32 mx-auto mb-4" :src="logo" alt="">
                    </Link>
                    <h2 class="text-xl my-10 font-bold capitalize mb-1">
                        Reset Password
                    </h2>
                    <!-- <p class="mb-4">Update your information</p> -->
                </header>
        
                <form @submit.prevent="submit">
                    <div class="mb-6 mt-20">
                        <label
                            for="password"
                            class="inline-block text-lg mb-2"
                        >
                            Old Password
                        </label>
                        <input
                            id="password"
                            v-model="form.old_password"
                            type="password"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            name="password"
                        />
                        <p class="text-red-500 text-xs mt-1">
                            {{ form.errors.old_password }}
                        </p>
                    </div>
                    <div class="mb-6">
                        <label
                            for="password"
                            class="inline-block text-lg mb-2"
                        >
                            New Password
                        </label>
                        <input
                            id="password"
                            v-model="form.new_password"
                            type="password"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            name="password"
                        />
                        <p class="text-red-500 text-xs mt-1">
                            {{ form.errors.new_password }}
                        </p>
                    </div>
                    <div class="mb-6">
                        <label
                            for="password"
                            class="inline-block text-lg mb-2"
                        >
                            Old Password
                        </label>
                        <input
                            id="password"
                            v-model="form.new_password_confirmation"
                            type="password"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            name="password"
                        />
                        <p class="text-red-500 text-xs mt-1">
                            {{ form.errors.new_password_confirmation }}
                        </p>
                    </div>
                    <div class="mb-6">
                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="bg-[var(--color-red)] hover:bg-[var(--color-red-hover) text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-50"
                        >
                            Update Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
</template>