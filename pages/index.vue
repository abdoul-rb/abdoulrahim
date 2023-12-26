<template>
    <div class="bg-[#10172A]">
        <!-- Static sidebar for desktop -->
        <div class="lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col">
            <nav class="fixed top-0 left-0 w-16 sm:w-48 h-full border-r border-gray-400 space-y-8">
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
                                <nuxt-link :to="{ name: '' }" class="relative inline-flex items-center justify-center gap-x-2 text-gray-600 p-2.5 rounded-lg  active:bg-gray-100 duration-150 group" :class="$route.name === 'index' ? 'bg-[#0BA5E9]': ''">
                                    <div class="text-gray-500">
                                        <svg class="w-6 h-6 group-hover:text-white" :class="$route.name === 'index' ? 'text-white': ''" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"></path>
                                        </svg>
                                    </div>
                                    <span class="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">Home</span>
                                </nuxt-link>
                            </li>

                            <li>
                                <nuxt-link :to="{ name: '' }" class="relative inline-flex items-center justify-center gap-x-2 text-gray-600 p-2.5 rounded-lg  active:bg-gray-100 duration-150 group" rel="nofollow">
                                    <div class="text-gray-500">
                                        <svg class="w-6 h-6 group-hover:text-white" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"></path>
                                        </svg>
                                    </div>
                                    <span class="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">Expériences</span>
                                </nuxt-link>
                            </li>

                            <li>
                                <nuxt-link :to="{ name: '' }" class="relative inline-flex items-center justify-center gap-x-2 text-gray-600 p-2.5 rounded-lg  active:bg-gray-100 duration-150 group" rel="nofollow">
                                    <div class="text-gray-500">
                                        <svg class="w-6 h-6 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
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

                <div class="mx-auto max-w-2xl md:max-w-5xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 mt-24 min-h-screen">
                    <div class="max-w-2xl">
                        <div class="text-3xl font-bold tracking-wide text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                            Abdoul Rahim
                        </div>

                        <h1 class="mt-1 text-2xl font-medium tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
                            Développeur Fullstack Laravel / Vue.JS
                        </h1>

                        <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                            Développeur Fullstack, spécialisé dans l'écosystème Laravel et passionné par la création d'applications web robustes, accéssibles et intuitives. J'utilise la stack TALL, combinée à une expériences en Vue.JS/Nuxt.JS.
                        </p>
                    </div>
                </div>

                <div class="mx-auto max-w-2xl md:max-w-5xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div class="mt-10 py-10 border-t border-gray-700 justify-between sm:flex sm:items-center">
                        <p class="text-gray-300">
                            © 2023 Abdoul Rahim. Tous droits réservés.
                        </p>

                        <div class="flex items-center gap-x-6 text-gray-400">
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
    name: 'IndexPage',
    /* layout: 'app', */
}
</script>
