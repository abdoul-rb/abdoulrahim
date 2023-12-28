<template>
    <div class="bg-[#10172A]">
        <div class="lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col">
            <nav class="fixed top-0 left-0 w-16 sm:w-48 h-full border-r border-gray-700 space-y-8">
                <div class="flex flex-col h-full">
                    <div class="h-20 w-full flex items-center justify-end px-4 sm:ml-auto">
                        <div class="relative py-4 px-4">
                            <button type="button" id="radix-:r0:" aria-haspopup="menu" aria-expanded="false" data-state="closed" class="outline-none">
                                <span>
                                    <img class="w-8 h-8 flex items-center gap-x-4 cursor-pointer rounded-full object-cover object-center ring-offset-2 ring-gray-800 focus:ring-2 duration-150"
                                        alt="vienna" src="~/assets/abdoulrahim.jpg">
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="flex-1 flex flex-col">
                        <ul class="px-6 sm:ml-auto text-sm font-medium flex-1 flex flex-col h-screen justify-center items-center space-y-3">
                            <li>
                                <nuxt-link :to="{ name: 'index' }" class="relative inline-flex items-center justify-center gap-x-2 text-gray-600 p-2.5 rounded-lg  active:bg-gray-100 duration-150 group" :class="$route.name === 'index' ? 'bg-[#0BA5E9]': ''">
                                    <div class="text-gray-500">
                                        <svg class="w-6 h-6 group-hover:text-white" :class="$route.name === 'index' ? 'text-white': ''" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"></path>
                                        </svg>
                                    </div>
                                    <span class="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">Home</span>
                                </nuxt-link>
                            </li>

                            <li>
                                <nuxt-link :to="{ name: 'projects' }" class="relative inline-flex items-center justify-center gap-x-2 text-gray-600 p-2.5 rounded-lg active:bg-gray-100 duration-150 group" :class="$route.name === 'projects' ? 'bg-[#0BA5E9]': ''">
                                    <div class="text-gray-500">
                                        <svg class="w-6 h-6 group-hover:text-white" :class="$route.name === 'projects' ? 'text-white': ''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"></path>
                                        </svg>
                                    </div>
                                    <span class="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">Projets</span>
                                </nuxt-link>
                            </li>

                            <li>
                                <a href="~/assets/DeveloppeurFullStack_AbdoulRahimBAH_120822.pdf" class="relative inline-flex items-center justify-center gap-x-2 text-gray-600 p-2.5 rounded-lg  active:bg-gray-100 duration-150 group" download="DeveloppeurFullStack_AbdoulRahimBAH.pdf">
                                    <div class="text-gray-500">
                                        <svg class="w-6 h-6 group-hover:text-white" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"></path>
                                        </svg>
                                    </div>
                                    <span class="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                                        Télécharger mon CV
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <div class="lg:pl-48 h-full">
            <main class="py-4 h-full">
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
                            Mes side projects 🚀, aussi bien personnels que professionnels.
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

                <!-- Footer -->
                <div class="pl-20 sm:pl-0 mx-auto max-w-2xl md:max-w-5xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div class="mt-10 sm:mt-20 py-10 border-t border-gray-700 justify-between sm:flex sm:items-center">
                        <p class="text-gray-300">
                            © 2023 Abdoul Rahim. Tous droits réservés.
                        </p>

                        <div class="mt-5 sm:mt-0 flex items-center gap-x-6 text-gray-400">
                            <a href="mailto:abdoulrahimbah6@gmail.com" rel="noopener noreferrer" target="_blank" class="group -m-1 p-1" aria-label="Me contacter par mail">
                                <svg class="h-6 w-6 text-[#0084C7] transition group-hover:text-sky-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </a>
                            
                            <a href="https://github.com/abdoul-rb" target="_blank" class="group -m-1 p-1" aria-label="Voir mon GitHub">
                                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-[#0084C7] transition group-hover:fill-sky-700">
                                    <path fillrule="evenodd" cliprule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                                </svg>
                            </a>
                            
                            <a href="https://www.linkedin.com/in/abdoul-rahim-%E3%85%A4-894801219/" target="_blank" class="group -m-1 p-1" aria-label="Me suivre sur Linkedin">
                                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-[#0084C7] transition group-hover:fill-sky-700">
                                    <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    /* layout: 'app', */
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
