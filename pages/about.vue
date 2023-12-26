<template>
    <body class="body">
        <div style="height: 800px;" class="bg-[#10172A]">
            <nav style="border: 1px dashed red"
                class="fixed top-0 left-0 w-16 sm:w-48 h-full border-r border-gray-500 space-y-8">
                <div class="flex flex-col h-full">
                    <div class="h-20 w-full flex items-center justify-end px-4 sm:ml-auto">
                        <div class="relative py-4 px-4">
                            <button type="button" id="radix-:r0:" aria-haspopup="menu" aria-expanded="false"
                                data-state="closed" class="outline-none">
                                <span>
                                    <img class="w-8 h-8 flex items-center gap-x-4 cursor-pointer rounded-full ring-offset-2 ring-gray-800 focus:ring-2 duration-150"
                                        alt="vienna" src="https://randomuser.me/api/portraits/women/79.jpg">
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="flex-1 flex flex-col">
                        <ul
                            class="px-6 sm:ml-auto text-sm font-medium flex-1 flex flex-col h-screen justify-center items-center space-y-3">
                            <li>
                                <nuxt-link :to="{ name: '' }"
                                    class="relative inline-flex items-center justify-center gap-x-2 text-gray-600 p-2.5 rounded-lg hover:bg-[#0BA5E9] hover:text-white active:bg-gray-100 duration-150 group"
                                    rel="nofollow">
                                    <div class="text-gray-500">
                                        <svg class="w-6 h-6 group-hover:text-white" data-slot="icon" fill="none"
                                            stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span
                                        class="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">Home</span>
                                </nuxt-link>
                            </li>

                            <li>
                                <nuxt-link :to="{ name: '' }"
                                    class="relative inline-flex items-center justify-center gap-x-2 text-gray-600 p-2.5 rounded-lg hover:bg-[#0BA5E9] hover:text-white active:bg-gray-100 duration-150 group"
                                    rel="nofollow">
                                    <div class="text-gray-500">
                                        <svg class="w-6 h-6 group-hover:text-white" data-slot="icon" fill="none"
                                            stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244">
                                            </path>
                                        </svg>
                                    </div>
                                    <span
                                        class="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">À
                                        propos</span>
                                </nuxt-link>
                            </li>

                            <li>
                                <nuxt-link :to="{ name: '' }"
                                    class="relative inline-flex items-center justify-center gap-x-2 text-gray-600 p-2.5 rounded-lg hover:bg-[#0BA5E9] hover:text-white active:bg-gray-100 duration-150 group"
                                    rel="nofollow">
                                    <div class="text-gray-500">
                                        <svg class="w-6 h-6 group-hover:text-white" data-slot="icon" fill="none"
                                            stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span
                                        class="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">Expériences</span>
                                </nuxt-link>
                            </li>

                            <li>
                                <nuxt-link :to="{ name: '' }"
                                    class="relative inline-flex items-center justify-center gap-x-2 text-gray-600 p-2.5 rounded-lg hover:bg-[#0BA5E9] hover:text-white active:bg-gray-100 duration-150 group"
                                    rel="nofollow">
                                    <div class="text-gray-500">
                                        <svg class="w-6 h-6 group-hover:text-white" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span
                                        class="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">Projets</span>
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <div class="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
            <p class="text-gray-300">© 2022 Float UI Inc. All rights reserved.</p>

            <div class="flex items-center gap-x-6 text-gray-400 mt-6">
                <a href="javascript:void()" rel="nofollow">
                    <svg class="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48">
                        <g clip-path="url(#a)">
                            <path fill="currentColor" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z">
                            </path>
                        </g>
                        <defs>
                            <clipPath id="a">
                            <path fill="#fff" d="M0 0h48v48H0z"></path>
                        </clipPath>
                    </defs>
                    </svg>
                </a>
                
                <a href="javascript:void()" rel="nofollow">
                    <svg class="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48">
                        <g clip-path="url(#clip0_17_80)">
                            <path fill="currentColor"
                                d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z">
                            </path>
                        </g>
                        <defs>
                            <clipPath id="clip0_17_80">
                                <path fill="#fff" d="M0 0h48v48H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    name: 'About',
    /* layout: 'app', */
}
</script>
