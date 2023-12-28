<template>
    <div class="bg-[#10172A]">
        <!-- Static sidebar for desktop -->
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
    }
}
</script>