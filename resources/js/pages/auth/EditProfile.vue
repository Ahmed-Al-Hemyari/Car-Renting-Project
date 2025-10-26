<script setup>
    import {useForm, Link} from '@inertiajs/vue3';
    import logo from '/public/images/logo.png';
    import Navbar from '@/MyComponents/Navbar.vue';

    const props = defineProps({
        user: Array
    });

    const form = useForm({
        name: props.user.name,
        email: props.user.email,
    });

    const submit = () => {
        form.put(`/profile/update/${props.user.id}`);
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
                    <h2 class="text-2xl font-bold uppercase mb-1">
                        Update
                    </h2>
                    <p class="mb-4">Update your information</p>
                </header>
        
                <form @submit.prevent="submit">
                    <div class="mb-6">
                        <label for="name" class="inline-block text-lg mb-2">
                            Name
                        </label>
                        <input
                            id="name"
                            v-model="form.name"
                            type="text"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            name="name"
                        />
                        <p class="text-red-500 text-xs mt-1">
                            {{ form.errors.name }}
                        </p>
                    </div>
        
                    <div class="mb-6">
                        <label for="email" class="inline-block text-lg mb-2"
                            >Email</label
                        >
                        <input
                            id="email"
                            v-model="form.email"
                            type="email"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            name="email"
                        />
                        <p class="text-red-500 text-xs mt-1">
                            {{ form.errors.email }}
                        </p>
                    </div>
        
                    <!-- <div class="mb-6">
                        <label
                            for="password"
                            class="inline-block text-lg mb-2"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            v-model="form.password"
                            type="password"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            name="password"
                        />
                        <p class="text-red-500 text-xs mt-1">
                            {{ form.errors.password }}
                        </p>
                    </div>
                    <div class="mb-6">
                        <label
                            for="password"
                            class="inline-block text-lg mb-2"
                        >
                            Password Confirmation
                        </label>
                        <input
                            id="password"
                            v-model="form.password_confirmation"
                            type="password"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            name="password"
                        />
                        <p class="text-red-500 text-xs mt-1">
                            {{ form.errors.password_confirmation }}
                        </p>
                    </div> -->
        
                    <!-- <div class="mb-6">
                        <label
                            for="password_confirmation"
                            class="inline-block text-lg mb-2"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="password_confirmation"
                            v-model="form.password_confirmation"
                            type="password"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            name="password_confirmation"
                        />
                        <p class="text-red-500 text-xs mt-1">
                            {{ form.errors.password_confirmation }}
                        </p>
                    </div> -->
        
                    <div class="mb-6">
                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="bg-[var(--color-red)] hover:bg-[var(--color-red-hover) text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-50"
                        >
                            Update Profile
                        </button>
                    </div>
        
                    <!-- <div class="mt-8">
                        <p>
                            Already have an account?
                            <Link href="/login" class="text-red"
                                >Login</Link
                            >
                        </p>
                    </div> -->
                </form>
            </div>
        </div>
    <!-- </AuthLayout> -->
</template>