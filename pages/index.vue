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
            <div class="max-w-3xl">
                <!-- <span class="text-base text-[#0084C7] tracking-wide">
                    Heyyy
                </span> -->

                <div class="text-3xl font-medium tracking-wide text-zinc-100 sm:text-4xl">
                    Abdoul Rahim Bah.
                </div>

                <h1 class="mt-2 text-xl font-normal tracking-wide text-zinc-300 lg:text-2xl leading-6">
                    Software Engineer — Laravel Fullstack Developer
                </h1>
                <h2 class="mt-1 text-base font-normal tracking-wide text-zinc-300">
                    Co/Founder of
                    <a href="doniin.com" class="hover:underline underline-offset-4 decoration-1">doniin.com</a> &
                    <a href="getsira.app" class="hover:underline underline-offset-4 decoration-1">getsira.app</a>
                </h2>

                <p class="mt-4 text-base text-zinc-400">
                    +5 ans d'expérience dans le développement de plateformes SaaS, e-commerce & solutions métier
                </p>

                <p class="mt-6 text-base font-light text-zinc-400">
                    Je suis Développeur fullstack Laravel, passionné par la création de produits digitaux utiles.
                    Doté d'une grande sensibilité pour le design, et j'aime tester et concevoir des interfaces soignées
                    et performantes, orientées métier, tout en garantissant une architecture claire et maintenable en
                    restant fidèle à l'adage <em>"Keep it simple</em>."
                </p>

                <p class="mt-6 text-base font-light text-zinc-400">
                    J'ai conçu, développé et déployé différents plateformes web — e-commerce, SaaS, BtoBtoC, ERP/CRM —
                    en gérant l'entièreté du cycle : architecture, intégration et UI/UX, CI/CD et déploiement sur VPS
                </p>
            </div>

            <div class="my-10 max-w-3xl">
                <div class="flex items-center justify-between">
                    <h2 class="font-medium tracking-wide uppercase text-zinc-100">
                        Projects
                    </h2>

                    <NuxtLink :to="{ name: 'projects' }"
                        class="inline-flex items-center text-sm font-normal leading-tight text-sky-400 group"
                        aria-label="Tous mes projets">
                        <span>
                            <span
                                class="inline-flex items-center gap-x-1 border-b border-transparent pb-px transition group-hover:border-white motion-reduce:transition-none">
                                Tous mes projets
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </span>
                    </NuxtLink>
                </div>

                <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
                </ul>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-8">
                <div class="sm:col-span-2 max-w-2xl mt-24">
                    <div class="text-xl font-semibold tracking-wide text-zinc-100 lg:text-2xl">
                        Restons en contact
                    </div>

                    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Je suis ouvert aux collaborations, CDI ou missions freelance.
                        Si vous souhaitez me contacter, que vous ayez une question ou que vous vouliez
                        simplement échanger, ce serait un plaisir de discuter avec vous !
                    </p>

                    <p class="mt-6 mb-6 text-base text-zinc-600 dark:text-zinc-400">
                        Si vous avez aussi un projet, je serais ravi de vous aider à le concrétiser.
                    </p>

                    <a href="mailto:abdoulrahimbah6@gmail.com"
                        class="rounded-lg border border-sky-500 text-sky-500 px-5 py-2 text-sm font-medium tracking-wide transition duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
                        M'envoyer un mail
                    </a>
                </div>

                <aside class="mt-10 space-y-8">
                    <div
                        class="rounded-lg rotate-2 group relative bg-[#1C2738] p-8 border border-gray-700 focus-within:ring-2 focus-within:ring-inset cursor-pointer hover:border-sky-400 transition-all">
                        <h3
                            class="text-lg font-semibold leading-6 text-white tracking-wide group-hover:text-sky-500 transition duration-100">
                            Ma stack
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
                        class="rounded-lg -rotate-2 group relative bg-[#1C2738] p-8 border border-gray-700 focus-within:ring-2 focus-within:ring-inset cursor-pointer hover:border-sky-400 transition-all">

                        <h3
                            class="text-lg font-semibold leading-6 text-white tracking-wide group-hover:text-sky-500 transition duration-100">
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
import { ref } from 'vue';
import type { Project } from '@/types/Project';
import { NuxtLink } from '#components';

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

const projects = ref<Project[]>([
    {
        title: 'Getsira.app',
        description: "Plateforme de gestion d’entreprise tout-en-un : ventes, stocks, dépenses, employés et finances. Une solution simple et moderne pour piloter votre business.",
        link: 'https://getsira.app/',
        github: 'https://github.com/abdoul-rb/sira',
        stacks: ['Laravel', 'Livewire', 'TailwindCSS', 'Alpine.JS', 'MariaDB', 'CI/CD', 'PestPHP', 'FilamentPHP']
    },
    {
        title: 'Doniin.com',
        description: "Doniin est une plateforme collaborative qui connecte les particuliers souhaitant envoyer des colis à ceux qui voyagent sur les mêmes itinéraires, principalement en avion.",
        link: 'https://doniin.com/',
        github: 'https://github.com/abdoul-rb/donii',
        stacks: ['Laravel', 'Livewire', 'TailwindCSS', 'Alpine.JS', 'MySQL', 'CI/CD', 'PestPHP']
    },
    {
        title: 'UNC Networking',
        description: "Plateforme de mise en relation entre les diplômés et les entreprises sur des offres d'emplois pour l'université UNC",
        link: 'https://pprod.univers-emploi.org/',
        github: 'https://github.com/abdoul-rb/unc-networking',
        stacks: ['Laravel', 'Livewire', 'Alpine.JS', 'TailwindCSS', 'MySQL']
    },
    {
        title: 'Seloger224',
        description: "Site web de petites annonces immobilières en Guinée, servant aussi de SAAS pour les agences immobilières.",
        link: 'https://selogger224.com',
        github: 'https://github.com/abdoul-rb/seloger-client',
        stacks: ['Laravel', 'Nuxt.Js', 'TailwindCSS', 'API REST']
    },
])
</script>
