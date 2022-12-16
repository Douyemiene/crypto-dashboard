<script setup lang="ts">
import IconGreenArrowUp from '@/assets/icons/IconGreenArrowUp.vue';


</script>

<template>
    <div class="overview">
        <div class="overview-item">
            <span class="title">Total Users</span>
            <span class="figure">50,450 <span>
                    Chart
                </span>
            </span>
            <span class="percentage">
                <IconGreenArrowUp />
                4%
            </span>
        </div>
        <div class="overview-item">
            <span class="title">Total Users</span>
              <span class="figure">50,450 <span>
                    Chart
                </span>
            </span>
            <span class="percentage">
                <IconGreenArrowUp />
                4%
            </span>
        </div>
        <div class="overview-item">
            <span class="title">Total Users</span>
              <span class="figure">50,450 <span>
                    Chart
                </span>
            </span>
            <span class="percentage">
                <IconGreenArrowUp />
                4%
            </span>
        </div>
        <div class="overview-item">
            <span class="title">Total Users</span>
              <span class="figure">50,450 <span>
                    Chart
                </span>
            </span>
            <span class="percentage">
                <IconGreenArrowUp />
                4%
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