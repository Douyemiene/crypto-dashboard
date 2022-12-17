<script setup lang="ts">
const props = defineProps<{
    tag: string
    active?: boolean
}>()

</script>

<template>
    <div class="tab" :class="props.active && 'active'">
        {{ props.tag }}
    </div>
</template>

<style scoped>
.tab {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #E7EAF4;
    font-size: 13px;
    border-radius: 10px;
    padding: 8px 14px;
    cursor: pointer;
    color: #646464;
}

.tab.active {
    border: 1px solid #1E1F21;
    color: #1E1F21;
}
</style>