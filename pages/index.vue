<template>
    <div class="flex flex-col py-10">
        <div>
            <h2 class="text-2xl font-bold text-center">Nuxt Movies App</h2>
        </div>
        <div class="flex justify-center items-center h-32">
            <input class="px-2 py-1 border border-gray-800 rounded-md min-w-64"
            v-model="searchTerm"
            type="text"
            placeholder="Search..."
            >
        </div>
        <!-- url is {{ url }}
        <br>
        cf key is {{ reftemp.apikey }}
        <br>
        cf url is {{ reftemp.apiBaseUrl }}
        <br>
        {{ tempcheckconfig}}
        <br>
        {{ reftemp }} -->
        data is {{ data }}
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10">
            <div v-for="movie in data?.results" :key=movie.title>
                {{ movie.title }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { APIResponse } from '../types/APIResponse'

const searchTerm = ref('');

const tempcheckconfig=useRuntimeConfig();
const reftemp= tempcheckconfig.apikey;
const url = computed(() => {
    return `api/movies/search?query=${searchTerm.value}`
})

// console.log('Above data');

const { data } = await useFetch<APIResponse>(url,{
    method: "GET"
});

// console.log("\n\n\n\n\n we got data\n\n");
// console.log(data);

</script>