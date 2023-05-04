<template>
  <div class="container mx-auto">
    <h2 class="text-4xl font-extrabold dark:text-white pt-5">Users</h2>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <h5 class="text-xl font-bold dark:text-white mb-3">Details</h5>
    <div class="columns-1 pt-5">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Username
                    </th>
                    <th scope="col" class="px-6 py-3">
                        {{ data.username }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Name
                    </th>
                    <td class="px-6 py-4">
                      {{ data.firstName }} {{ data.lastName }}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Gender
                    </th>
                    <td class="px-6 py-4">
                        {{ data.gender }}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Email
                    </th>
                    <td class="px-6 py-4">
                        {{ data.email }}
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Mobile Phone
                    </th>
                    <td class="px-6 py-4">
                        {{ data.phone }}
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    <div class="flex justify-end pt-5">
        <RouterLink to="/">
            <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Back</button>
        </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const data = ref(null)
fetch(`https://dummyjson.com/users/${ route.params.id }`)
.then(res => res.json())
.then(json => data.value = json)
</script>