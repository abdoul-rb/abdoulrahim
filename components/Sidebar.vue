<template>
    <nav class="fixed top-0 left-0 w-16 sm:w-48 h-full border-r border-gray-700 space-y-8">
        <div class="flex flex-col h-full">
            <div class="h-20 w-full flex items-center justify-end px-4 sm:ml-auto">
                <div class=" py-4 px-4">
                    <NuxtLink :to="{ name: 'index' }" type="button" class="outline-none">
                        <span>
                            <img class="w-8 h-8 flex items-center gap-x-4 cursor-pointer rounded-full object-cover object-center ring-offset-2 ring-gray-800 focus:ring-2 duration-150"
                                alt="Abdoul Rahim" src="@/assets/abdoulrahim.jpg">
                        </span>
                    </NuxtLink>
                </div>
            </div>

            <div class="flex-1 flex flex-col">
                <ul
                    class="px-6 sm:ml-auto text-sm font-medium flex-1 flex flex-col h-screen justify-center items-center space-y-3">
                    <li>
                        <NuxtLink :to="{ name: 'index' }"
                            class="relative inline-flex items-center justify-center gap-x-2 text-gray-600 p-2.5 rounded-lg active:bg-gray-100 duration-150 group"
                            :class="$route.name === 'index' ? 'bg-[#0BA5E9]' : ''">
                            <div class="text-gray-500">
                                <svg class="w-6 h-6 group-hover:text-white"
                                    :class="$route.name === 'index' ? 'text-white' : ''" data-slot="icon" fill="none"
                                    stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z">
                                    </path>
                                </svg>
                            </div>
                            <span
                                class="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">Home</span>
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink :to="{ name: 'projects' }"
                            class="relative inline-flex items-center justify-center gap-x-2 text-gray-600 p-2.5 rounded-lg active:bg-gray-100 duration-150 group"
                            :class="$route.name === 'projects' ? 'bg-[#0BA5E9]' : ''">
                            <div class="text-gray-500">
                                <svg class="w-6 h-6 group-hover:text-white"
                                    :class="$route.name === 'projects' ? 'text-white' : ''" data-slot="icon" fill="none"
                                    stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z">
                                    </path>
                                </svg>
                            </div>
                            <span
                                class="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">Projets</span>
                        </NuxtLink>
                    </li>

                    <li>
                        <a href="/assets/DeveloppeurFullStack_AbdoulRahimBAH_15072025.pdf"
                            class="relative inline-flex items-center justify-center gap-x-2 text-gray-600 p-2.5 rounded-lg active:bg-gray-100 duration-150 group"
                            download="DeveloppeurFullStack_AbdoulRahimBAH.pdf">
                            <div class="text-gray-500">
                                <svg class="w-6 h-6 group-hover:text-white" data-slot="icon" fill="none"
                                    stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z">
                                    </path>
                                </svg>
                            </div>
                            <span
                                class="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                                Télécharger mon CV
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
// Composant Sidebar - Vue 3 Composition API
</script>