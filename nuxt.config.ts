// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// Activer les devtools
	devtools: { enabled: true },

	// Configuration des modules
	modules: [
		'@nuxtjs/tailwindcss'
	],

	// Configuration de l'application
	app: {
		head: {
			title: 'Développeur Fullstack PHP Laravel | Vue.JS',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: "Je suis un développeur Fullstack expérimenté, spécialisé dans l'écosystème Laravel|PHP et passionné par la création d'applications web robustes et intuitives" },
				{ name: 'keywords', content: 'Développeur Fullstack, Laravel, PHP, Vue.JS, Nuxt.JS, Tailwind CSS, Alpine.js, Livewire, Typescript' },
				{ name: 'format-detection', content: 'telephone=no' }
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap' },
			]
		}
	},

	// Configuration CSS
	css: [],

	// Configuration de la génération statique
	nitro: {
		prerender: {
			routes: ['/']
		}
	}
})
