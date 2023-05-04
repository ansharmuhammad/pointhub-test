<template>
  <div class="container mx-auto">
    <h2 class="text-4xl font-extrabold dark:text-white pt-5">Users</h2>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <h5 class="text-xl font-bold dark:text-white mb-3">List</h5>
    <div class="relative mb-6">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
        </svg>
      </div>
      <input v-model="search" @change="handleSearch(search)" type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
    </div>
    <div v-if="data.users.length > 0" class="columns-1 pt-5">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          NAME
                      </th>
                      <th scope="col" class="px-6 py-3">
                          EMAIL
                      </th>
                      <th scope="col" class="px-6 py-3">
                          GENDER
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="user in data?.users" :key="user?.id">
                      <th scope="row" class="px-6 py-4 font-medium" style="color: blue !important;">                          
                          <router-link :to="'/' + user.id">
                            {{ user.firstName }} {{ user.lastName }}
                          </router-link>
                      </th>
                      <td class="px-6 py-4">
                          {{ user.email }}
                      </td>
                      <td class="px-6 py-4">
                          {{ user.gender }}
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
    <h5 v-else>you don't have data</h5>
    
    <nav aria-label="Page navigation example" class="flex justify-end pt-5">
      <ul class="inline-flex items-center -space-x-px">
        <li>
          <a @click="getPage(1)" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <!-- <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"></path>
            </svg>
          </a>
        </li>
        <li v-for="n in pagination.length" :key="n">
          <a v-if="n != page" @click="getPage(n)" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ pagination[n-1] }}</a>
          <a v-else @click="getPage(n)" aria-current="page" class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{{ pagination[n-1] }}</a>
        </li>
        <li>
          <a @click="getPage(total/10)" class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <!-- <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    <nav aria-label="Page navigation example" class="flex justify-end pt-5">
      <!-- Previous Button -->
      <a @click="handlePrev()" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Previous
      </a>

      <!-- Next Button -->
      <a @click="handleNext()" class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
      </a>
    </nav>

  </div>
</template>

<script setup lang="ts">
// import axios from 'axios'
import { ref } from 'vue';
const data = ref(null);
const search = ref('');

const totalPage = ref(0)
const total = ref(0)
const pagination = ref([])
const page = ref(1)

const getPage = (pagenumb) => {
  // pagination.value = []
  let pageTemp = []
  page.value = pagenumb
  let skip = (page.value-1) * 10;
  console.log(`https://dummyjson.com/users/search?q=${search.value}&limit=10&skip=${skip}`)
  fetch(`https://dummyjson.com/users/search?q=${search.value}&limit=10&skip=${skip}`)
  .then(res => res.json())
  .then(json => {
    data.value = json
    total.value = json.total
  })
  .then(()=>{
    // leftside
    if (page.value > 0) {
      for (let index = 3; index > 0; index--) {
        if ((page.value - index) > 0) {
          pageTemp.push(page.value - index)
        }      
      }    
    }

    pageTemp.push(page.value)
    
    // rigthside
    if (page.value < (Math.floor(total.value / 10))){
      console.log('masuk')
      for (let index = 1; index <= 3; index++) {
        if ((page.value + index) < (total.value / 10)) {
          pageTemp.push(page.value + index)
        }      
      }
    }

    pagination.value = pageTemp
    console.log(pagination.value)
  })
  .catch(err =>console.error(err))
}

const handleNext = () => {
  if ((page.value + 1) < (Math.floor(total.value / 10))){
    getPage(page.value + 1)
  }
}

const handlePrev = () => {
  if ((page.value - 1) > 0){
    getPage(page.value - 1)
  }
}

const handleSearch = () => {
  getPage(1)
}

getPage(1)

</script>