<template>
    <div>
        <header class="mx-auto max-w-2xl md:max-w-5xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <div class="relative flex gap-4">
                <div class="flex flex-1"></div>

                <div class="flex justify-end md:flex-1 space-x-3">
                    <div class="pointer-events-auto">
                        <a href="mailto:abdoulrahimbah6@gmail.com"
                            class="rounded-full bg-[#0084C7] px-6 py-2 text-sm font-medium tracking-wide text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
                            Me contacter
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <section
            class="pl-20 sm:pl-0 mx-auto max-w-2xl md:max-w-5xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 mt-24 min-h-screen">
            <div class="max-w-2xl">
                <span class="text-base text-[#0084C7] tracking-wide">
                    Hello, je suis
                </span>

                <div class="mt-4 text-3xl font-bold tracking-wide text-zinc-100 sm:text-4xl">
                    Abdoul Rahim Bah.
                </div>

                <h1 class="mt-3 text-2xl font-semibold tracking-wide text-zinc-300 sm:text-3xl tracking-wide leading-6">
                    Développeur web Fullstack <span class="bg-sky-700 p-1 -rotate-2 text-sky-200 inline-block">Laravel /
                        Vue.JS</span>.
                </h1>

                <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    <strong>Développeur Fullstack</strong>, spécialisé dans l'écosystème <em>Laravel</em> et passionné
                    par la création d'applications web robustes, accéssibles et intuitives. J'utilise la stack TALL,
                    combinée à une expériences en <strong>Vue.JS/Nuxt.JS</strong>.
                </p>

                <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    Actuellement je suis en poste chez R Web, une agence web basée à Paris, accompagnant des projets
                    digitaux de A à Z, depuis leur conception jusqu'à leur mise en production,
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-8">
                <div class="sm:col-span-2 max-w-2xl mt-24">
                    <div class="text-3xl font-bold tracking-wide text-zinc-100 sm:text-4xl">
                        Restons en contact
                    </div>

                    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Bien que je ne sois pas actuellement à la recherche d'un emploi, je reste ouvert à de nouvelles
                        opportunités. Si vous souhaitez me contacter, que vous ayez une question ou que vous vouliez
                        simplement échanger, ce serait un plaisir de discuter avec vous !
                    </p>

                    <p class="mt-6 mb-6 text-base text-zinc-600 dark:text-zinc-400">
                        Si vous avez aussi un projet, je serais ravi de vous aider à le concrétiser.
                    </p>

                    <a href="mailto:abdoulrahimbah6@gmail.com"
                        class="rounded-lg border border-[#0084C7] text-[#0084C7] px-8 py-3 text-base font-medium tracking-wide shadow-sm transition duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
                        M'envoyer un mail
                    </a>
                </div>

                <aside class="space-y-8">
                    <div
                        class="rounded-lg rotate-2 group relative bg-[#1C2738] p-8 border border-gray-700 focus-within:ring-2 focus-within:ring-inset cursor-pointer">
                        <h3
                            class="text-lg font-semibold leading-6 text-white tracking-wide group-hover:text-[#0084C7] transition duration-100">
                            Ma stack favorite
                        </h3>

                        <div class="mt-6 space-y-3 leading-6">
                            <li v-for="(skill, index) in skills" :key="index"
                                class="flex gap-x-2 text-white font-semibold text-sm">
                                <span class="text-sky-600">&#8212;&#8212;</span>
                                <span class="tracking-wider">{{ skill }}</span>
                            </li>
                        </div>
                    </div>

                    <div
                        class="rounded-lg -rotate-2 group relative bg-[#1C2738] p-8 border border-gray-700 focus-within:ring-2 focus-within:ring-inset cursor-pointer">

                        <h3
                            class="text-lg font-semibold leading-6 text-white tracking-wide group-hover:text-[#0084C7] transition duration-100">
                            <a href="" class="focus:outline-none" target="_blank">
                                <!-- <span class="absolute inset-0" aria-hidden="true"></span> -->
                                Nomade Consulting
                            </a>
                        </h3>

                        <div class="mt-4">
                            <p class="text-sm text-slate-400 font-light">
                                Votre agence tout en un pour digitaliser votre entreprise en Guinée.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// @ts-ignore - definePageMeta est auto-importé par Nuxt 3
definePageMeta({
    layout: 'app'
})

// Données réactives
const skills = ref<string[]>([
    'Laravel',
    'Vue.JS',
    'Nuxt.JS',
    'Tailwind CSS',
    'Alpine.js',
    'Livewire',
    'Typescript',
])
</script>
