<script setup lang="ts">
import LogItem from './LogItem.vue';

import { useDashboardStore } from '@/stores/dashboard'

const { activities } = useDashboardStore()
</script>

<template>
    <div class="h-[70vh]">
        <div class="h-[90%] overflow-y-scroll mb-10">
            <div class="flex flex-col overflow-y-hidden">
                <LogItem v-for="log in activities" :log="log"/>
            </div>
        </div>
        <RouterLink to='/activities' class="activity-btn">
            See All Activities
        </RouterLink>
    </div>
</template>

<style scoped>
.activity-btn {
    background: #005674 0% 0% no-repeat padding-box;
    border-radius: 10px;
    color: var(--white);
    padding: 8px 16px;
    font-size: 14px;
}
</style>