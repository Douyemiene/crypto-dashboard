<script setup lang="ts">
import IconGreenArrowUp from '@/assets/icons/IconGreenArrowUp.vue';
import { useDashboardStore } from '@/stores/dashboard'

const { totals } = useDashboardStore()

</script>

<template>
    <div class="overview">

        <div class="overview-item" v-for="item in totals">
            <span class="title">{{ item.title }}</span>
            <span class="figure">{{ item.value }} <span>
                    chart
                </span>
            </span>
            <span class="percentage">
                <IconGreenArrowUp v-show="item.positive" />
                {{ item.percentageValue }}%
            </span>
        </div>
    </div>
</template>

<style scoped>
.overview {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #E8EAF2;
    border-radius: 24px;
    padding: 40px 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.overview-item {
    display: flex;
    flex-direction: column;
}

.title {
    font-size: 14px;
    color: #787879;
    margin-bottom: 6px;
    font-weight: 500;
    text-transform: capitalize;
}

.figure {
    font-size: 20px;
    font-weight: bold;
    color: #4B4B4D;
    display: flex;
    align-items: center;
    gap: 5px;
}

.percentage {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    color: #646464;
}
</style>