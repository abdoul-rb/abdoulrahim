<template>
    <div class="bg-[#10172A]">
        <div class="lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col">
            <!-- Sidebar -->
            <Sidebar />
        </div>

        <div class="lg:pl-48 h-full">
            <div class="py-4 h-full">
                <main>
                    <nuxt />
                </main>

                <!-- Footer -->
                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Sidebar from '@/components/Sidebar.vue';
export default {
    name: 'app',

    data() {
        return {
            user: null
        }
    },
    mounted() {
        document.addEventListener('copy', this.disableCopy)
        document.addEventListener('paste', this.disablePaste)

        // document.addEventListener('selectstart', this.disableSelection)
        document.addEventListener('contextmenu', this.disableRightClick)
        document.addEventListener('mousedown', this.disableRightClickSelection)
    },
    beforeDestroy() {
        document.removeEventListener('copy', this.disableCopy)
        document.removeEventListener('paste', this.disablePaste)

        // document.removeEventListener('selectstart', this.disableSelection)
        document.removeEventListener('contextmenu', this.disableRightClick)
        document.removeEventListener('mousedown', this.disableRightClickSelection)
    },
    methods: {
        disableCopy(event) {
            event.preventDefault()
        },

        disablePaste(event) {
            event.preventDefault()
        },

        disableSelection(event) {
            event.preventDefault()
        },

        disableRightClick(event) {
            event.preventDefault()
        },

        disableRightClickSelection(event) {
            if (event.button === 2) {
                event.preventDefault()
            }
        }
    }
}
</script>