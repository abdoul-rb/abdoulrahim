<template>
    <li
        class="flex flex-col gap-5 rounded-lg group relative bg-[#1C2738] p-6 focus-within:ring-2 focus-within:ring-inset cursor-pointer">
        <div class="flex justify-between items-center">
            <span>
                <svg class="h-10 w-10 text-sky-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
            </span>

            <div class="flex items-center space-x-4">
                <a :href="project.github" v-if="project.github" class="text-gray-300 group-hover:text-gray-400"
                    aria-hidden="true">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                        </path>
                    </svg>
                </a>

                <a :href="project.link"
                    class="text-gray-300 group-hover:text-gray-400 group-hover:rotate-45 transition duration-150"
                    aria-hidden="true">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>

        <div class="">
            <h3
                class="text-lg font-semibold leading-6 text-white tracking-wide group-hover:text-[#0084C7] transition duration-100">
                <a :href="project.link" class="focus:outline-none" target="_blank">
                    <!-- <span class="absolute inset-0" aria-hidden="true"></span> -->
                    {{ project.title }}
                </a>
            </h3>
            <p class="mt-2 text-sm text-slate-400 font-light">
                {{ project.description }}
            </p>
        </div>

        <div class="mt-auto flex items-center gap-2 text-sm font-light text-slate-600 flex-wrap">
            <SkillBadge v-for="(stack, i) in project.stacks" :key="i" :skill="stack" />
        </div>

        <!-- <span class=" pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400
                group-hover:rotate-45 transition duration-150" aria-hidden="true">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z">
                </path>
            </svg>
        </span> -->
    </li>
</template>

<script setup lang="ts">
import type { Project } from '@/types/Project';

defineProps<{
    project: Project
}>();
</script>