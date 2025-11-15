<template>
    <strong
        class="inline-flex items-center rounded-full bg-sky-500/10 px-2.5 py-1 text-xs text-sky-600 ring-1 ring-inset ring-sky-500/10">
        {{ skill }}
    </strong>
</template>

<script setup lang="ts">
defineProps<{
    skill: string
}>();
</script>