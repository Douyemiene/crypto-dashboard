<script setup lang="ts">
import { ref } from 'vue';
import Tab from './Tab.vue';


const tabs = [
    {
        tag: "All"
    },
    {
        tag: 'NG'
    },
    {
        tag: 'KE'
    }
]

const activeIndex = ref(0)

const setActiveTab = (index: number) => {
    activeIndex.value = index
}

</script>

<template>
    <div class="group-tab">
        <span v-for="(tab, index) in tabs" :class="activeIndex === index && 'active'" @click="setActiveTab(index)">
            {{ tab.tag }}
        </span>
    </div>
</template>

<style scoped>
.group-tab {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 10px;
    cursor: pointer;
}

.group-tab span {
    padding: 8px 12px;
    text-transform: uppercase;
    color: #787879;
    border: 1px solid #E7EAF4;
}

.group-tab span:first-of-type {
    border-radius: 10px 0px 0px 10px;
}

.group-tab span:last-of-type {
    border-radius: 0px 10px 10px 0px;
}

.group-tab span.active {
    background-color: #262626;
    color: #FFFFFF;
}
</style>