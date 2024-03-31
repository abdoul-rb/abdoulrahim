<template>
    <div>
        <div class="mx-auto max-w-2xl md:max-w-5xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <div class="relative flex gap-4">
                <div class="flex flex-1"></div>
                
                <div class="flex justify-end md:flex-1 space-x-3">
                    <div class="pointer-events-auto">
                        <a href="mailto:abdoulrahimbah6@gmail.com" class="rounded-full bg-[#0084C7] px-6 py-2 text-sm font-medium tracking-wide text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
                            Me contacter
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="pl-20 sm:pl-0 mx-auto max-w-2xl md:max-w-5xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 mt-24 min-h-screen">
            <div class="max-w-2xl">
                <h1 class="mt-4 text-3xl font-bold tracking-wide text-zinc-100 sm:text-4xl">
                    Side projects 🚀.
                </h1>

                <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    Durant mon parcours, que ce soit pendant ma formation jusqu'après, j'ai eu l'occasion de travailler sur différents projets qui m'ont permis d'acquérir de nouvelles compétences et d'en renforcer d'autres.
                    Ceux là sont ceux dont je suis le plus fier.
                </p>
            </div>

            <div class="mt-10 sm:mt-20">
                <h1 class="text-xl font-medium tracking-wider text-zinc-100">
                    Best of
                </h1>

                <ul class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <li v-for="(project, index) in projects" :key="index" class="rounded-lg group relative bg-[#1C2738] p-6 focus-within:ring-2 focus-within:ring-inset cursor-pointer">
                        <div class="flex justify-between items-center">
                            <span>
                                <svg class="h-10 w-10 text-sky-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>
                            </span>

                            <div class="flex items-center space-x-4">
                                <a :href="project.github" class="text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>

                                <a :href="project.link" class="text-gray-300 group-hover:text-gray-400 group-hover:rotate-45 transition duration-150" aria-hidden="true">
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="mt-6">
                            <h3 class="text-lg font-semibold leading-6 text-white tracking-wide group-hover:text-[#0084C7] transition duration-100">
                                <a :href="project.link" class="focus:outline-none" target="_blank">
                                    <!-- <span class="absolute inset-0" aria-hidden="true"></span> -->
                                    {{ project.title }}
                                </a>
                            </h3>
                            <p class="mt-2 text-sm text-slate-400 font-light">
                                {{ project.description }}
                            </p>
                        </div>

                        <div class="mt-6 flex items-center space-x-3 text-sm font-light text-slate-600">
                            <strong v-for="(stack, i) in project.stacks">
                                {{ stack }}
                            </strong>
                        </div>

                        <!-- <span class="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400 group-hover:rotate-45 transition duration-150" aria-hidden="true">
                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
                            </svg>
                        </span> -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    layout: 'app',
    data() {
        return {
            projects: [
                {
                    title: 'Calculateur d\'impôts',
                    description: 'Un simulateur de calcul de l\'impôt sur les revenus en France en version simplifiée accessible sur le web depuis n\'importe quel appareil.',
                    link: 'https://calculateur-impot.vercel.app',
                    github: 'https://github.com/abdoul-rb/calculateur-impot',
                    stacks: ['Nuxt.Js', 'TailwindCSS', 'Jest', 'Vercel']
                },
                {
                    title: 'UNC Networking',
                    description: 'Plateforme de mise en relation entre les diplômés et les entreprises sur des offres d\'emplois pour l\'université UNC',
                    link: '#',
                    github: 'https://github.com/abdoul-rb/unc-networking',
                    stacks: ['Laravel', 'TailwindCSS', 'MySQL']
                },
                {
                    title: 'Seloger224',
                    description: 'Site web de petites annonces immobilières en Guinée, servant aussi de SAAS pour les agences immobilières.',
                    link: 'https://selogger224.com',
                    github: 'https://github.com/abdoul-rb/seloger-client',
                    stacks: ['Laravel', 'Nuxt.Js', 'TailwindCSS', 'API REST']
                },
                {
                    title: 'Nomade CRM',
                    description: 'Site vitrine pour la présentation d\'un CRM pour les entreprises de prestations de services.',
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
                    title: 'Kaminter',
                    description: 'Création d\'un site vitrine pour une entreprise de prestations de services en bâtiment et d\'import-export.',
                    link: 'https://kaminter.fr/',
                    github: 'https://github.com/abdoul-rb/kamainter',
                    stacks: ['Laravel', 'TailwindCSS', 'Ionos']
                },
                {
                    title: 'Tampon digital',
                    description: 'Générateur de tampons digitaux au format png pour les entreprises une touche d\'authenticité à vos documents officiels.',
                    link: 'https://tampon-digital-eight.vercel.app/',
                    github: 'https://github.com/lafia/tampon-digital',
                    stacks: ['Nuxt.Js', 'TailwindCSS', 'Vercel', 'Serverless']
                },
                {
                    title: 'IaLearn',
                    description: 'Plateforme d\'apprentissage en ligne d\'intélligence artificielle pour les étudiants et les professionnels.',
                    link: 'https://kaminter.fr/',
                    github: 'https://github.com/abdoul-rb/kamainter',
                    stacks: ['Nuxt.Js', 'TailwindCSS', 'Vercel', 'Serverless']
                },
                {
                    title: 'Sofa Store',
                    description: 'Site e-commerce de vente de produits de vidéosurveillance et de domotion en Côté d\'Ivoire.',
                    link: 'https://sofa-tech.com',
                    github: 'https://github.com/abdoul-rb/kamainter',
                    stacks: ['Laravel', 'Lunar', 'TailwindCSS']
                },
            ]
        }
    },
}
</script>
