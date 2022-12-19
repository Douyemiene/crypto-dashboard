<script setup lang="ts">
import { ref } from 'vue';
import Tab from './Tab.vue';


const tabs = [
    {
        tag: "Today"
    },
    {
        tag: '7 Days'
    },
    {
        tag: '30 Days'
    },
    {
        tag: 'All Time'
    },
]

const activeIndex = ref(3)

const setActiveTab = (index: number) => {
    activeIndex.value = index
}

</script>

<template>
    <div class="flex items-center flex-1 gap-4">
        <Tab v-for="(tab, index) in tabs" :tag="tab.tag" :active="activeIndex === index" @click="setActiveTab(index)" />
    </div>
</template>

<style scoped>

</style>