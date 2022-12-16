<script setup lang="ts">
import LogItem from './LogItem.vue';


</script>

<template>
    <div class="h-[70vh]">
        <div class="h-[90%] overflow-y-scroll mb-10">
            <div class="flex flex-col overflow-y-hidden">
                <LogItem />
                <LogItem />
                <LogItem />
                <LogItem />
                <LogItem />
                <LogItem />
                <LogItem />
                <LogItem />
            </div>
        </div>
        <button class="activity-btn">
            See All Activities
        </button>
    </div>
</template>

<style scoped>
.activity-btn {
    background: #005674 0% 0% no-repeat padding-box;
    border-radius: 10px;
    color: var(--white);
    padding: 11px 16px;
    /* margin-top: 36px; */
}
</style>