<template>
    <div>
        <div class="mx-auto max-w-2xl md:max-w-5xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
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
        </div>

        <div
            class="pl-20 sm:pl-0 mx-auto max-w-2xl md:max-w-5xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 mt-24 min-h-screen">
            <div class="max-w-2xl">
                <h1 class="mt-4 text-3xl font-bold tracking-wide text-zinc-100 sm:text-4xl">
                    Side projects 🚀.
                </h1>

                <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    Durant mon parcours, que ce soit pendant ma formation jusqu'après, j'ai eu l'occasion de travailler
                    sur différents projets qui m'ont permis d'acquérir de nouvelles compétences et d'en renforcer
                    d'autres.
                    Ceux là sont ceux dont je suis le plus fier.
                </p>
            </div>

            <div class="mt-10 sm:mt-20">
                <h1 class="text-xl font-medium tracking-wider text-zinc-100">
                    Best of
                </h1>

                <ul class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types/Project';

// Définir le layout
definePageMeta({
    layout: 'app'
})

// Données réactives
const projects = ref<Project[]>([
    {
        title: 'Doniin.com',
        description: "Doniin est une plateforme collaborative qui connecte les particuliers souhaitant envoyer des colis à ceux qui voyagent sur les mêmes itinéraires, principalement en avion.",
        link: 'https://doniin.com/',
        github: 'https://github.com/abdoul-rb/donii',
        stacks: ['Laravel', 'Livewire', 'TailwindCSS', 'Alpine.JS', 'MySQL', 'CI/CD', 'PestPHP']
    },
    {
        title: "Calculateur d'impôts",
        description: "Un simulateur de calcul de l'impôt sur les revenus en France en version simplifiée accessible sur le web depuis n'importe quel appareil.",
        link: 'https://calculateur-impot.vercel.app',
        github: 'https://github.com/abdoul-rb/calculateur-impot',
        stacks: ['Nuxt.Js', 'TailwindCSS', 'Jest', 'Vercel']
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
    {
        title: 'Nomade CRM',
        description: "Site vitrine pour la présentation d'un CRM pour les entreprises de prestations de services.",
        link: 'https://manage-gn.vercel.app/',
        github: 'https://github.com/abdoul-rb/manage-crm',
        stacks: ['Nuxt.Js', 'Geo API', 'Vercel']
    },
    {
        title: 'Lafia Immobilier',
        description: 'Site web d\'investissement locatif immobilier proposant un simulateur de rentabilité et un panel d\'administration pour les utilisateurs.',
        link: 'https://lafia-invest.vercel.app',
        github: 'https://github.com/abdoul-rb/lafia-client',
        stacks: ['Laravel', 'Nuxt.Js', 'TailwindCSS', 'REST', 'AWS']
    },
    {
        title: 'Tampon digital',
        description: "Générateur de tampons digitaux au format png pour les entreprises une touche d'authenticité à vos documents officiels.",
        link: 'https://tampon-digital-eight.vercel.app/',
        github: 'https://github.com/lafia/tampon-digital',
        stacks: ['Nuxt.Js', 'TailwindCSS', 'Vercel', 'Serverless']
    },
    {
        title: 'IaLearn',
        description: "Plateforme d'apprentissage en ligne d'intélligence artificielle pour les étudiants et les professionnels.",
        link: 'https://kaminter.fr/',
        github: 'https://github.com/abdoul-rb/kamainter',
        stacks: ['Nuxt.Js', 'TailwindCSS', 'Vercel', 'Serverless']
    },
    {
        title: 'Sofa Store',
        description: "Site e-commerce de vente de produits de vidéosurveillance et de domotion en Côté d'Ivoire.",
        link: 'https://sofa-tech.com',
        github: 'https://github.com/abdoul-rb/kamainter',
        stacks: ['Laravel', 'Lunar', 'TailwindCSS']
    },
    {
        title: 'Kaminter',
        description: "Création d'un site vitrine pour une entreprise de prestations de services en bâtiment et d'import-export.",
        link: 'https://kaminter.fr/',
        github: 'https://github.com/abdoul-rb/kamainter',
        stacks: ['Laravel', 'TailwindCSS', 'Ionos']
    },
])
</script>
