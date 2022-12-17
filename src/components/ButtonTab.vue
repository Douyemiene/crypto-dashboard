<script setup lang="ts">
const props = defineProps<{
    tag: string
    active: boolean
}>()

</script>

<template>
    <span class="button-tab" :class="props.active && 'active-tab'">
        {{ props.tag }}
    </span>
</template>

<style scoped>
.button-tab {
    font-size: 18px;
    font-weight: bold;
    color: #1E1F21;
    opacity: .5;
    cursor: pointer;
    text-transform: capitalize;
}

.button-tab.active-tab {
    font-size: 18px;
    font-weight: bold;
    color: #1E1F21;
    opacity: 1;
}
</style>