<script setup>
    const props = defineProps({
        route: String,
    });
</script>

<template>
    <form :action="`/${props.route}`" class="w-10/12 mx-auto flex flex-row justify-between">
        <div class="relative border-2 w-full border-gray-100 m-4 rounded-full flex flex-row justify-between">
            <input
                type="text"
                name="search"
                class="h-14 w-full pl-5 rounded-l-full z-0 focus:shadow focus:outline-none bg-white text-gray-800"
                placeholder="Search ..."
            />
            <button
                type="submit"
                class="h-14 w-35 py-4 px-6 text-white rounded-r-full bg-[var(--color-red)] hover:bg-[var(--color-red-hover)]"
            >
                Search
            </button>
        </div>
    </form>
</template>