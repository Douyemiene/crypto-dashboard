<script setup lang="ts">
import type { ILog } from '@/stores/dashboard';

const { log } = defineProps<{
    log: ILog
}>()
</script>

<template>
    <div class="log-item">
        <p class="text">{{ log.activity }}</p>
        <p class="text">{{ log.ip }}</p>
        <p class="text">{{ log.date }}</p>
    </div>
</template>

<style scoped>
.log-item {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    padding: 16px;
    margin: 4px 0px;
    transition: all .10s;
    cursor: pointer;
}

.log-item:hover {
    box-shadow: 0px 1px 5px #E7EAF480;
    border: 1px solid #E7EAF4;
    border-radius: 24px;
}

.log-item .text {
    font-size: 12px;
    letter-spacing: 0px;
    color: #646464;
}
</style>