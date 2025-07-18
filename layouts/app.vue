<template>
    <div class="bg-[#10172A]">
        <div class="lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col">
            <Sidebar />
        </div>

        <div class="lg:pl-48 h-full">
            <div class="py-4 h-full">
                <main>
                    <slot />
                </main>

                <Footer />
            </div>
        </div>
    </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'

// Variables réactives
const user = ref(null)

// Lifecycle hooks avec Vue 3
onMounted(() => {
    document.addEventListener('copy', disableCopy)
    document.addEventListener('paste', disablePaste)
    document.addEventListener('contextmenu', disableRightClick)
    document.addEventListener('mousedown', disableRightClickSelection)
})

onBeforeUnmount(() => {
    document.removeEventListener('copy', disableCopy)
    document.removeEventListener('paste', disablePaste)
    document.removeEventListener('contextmenu', disableRightClick)
    document.removeEventListener('mousedown', disableRightClickSelection)
})

// Méthodes
const disableCopy = (event) => {
    event.preventDefault()
}

const disablePaste = (event) => {
    event.preventDefault()
}

const disableRightClick = (event) => {
    event.preventDefault()
}

const disableRightClickSelection = (event) => {
    if (event.button === 2) {
        event.preventDefault()
    }
}
</script>