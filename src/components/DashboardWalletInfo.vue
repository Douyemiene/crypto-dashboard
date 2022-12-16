<script setup lang="ts">
import IconUsers from '@/assets/icons/IconUsers.vue'
import IconRightArrow from '@/assets/icons/IconRightArrow.vue';
</script>

<template>
    <div class="wallet-wrapper">
        <div class="flex items-center justify-between">
            <h3 class="title">
                Wallet
            </h3>
            <IconRightArrow />
        </div>

        <div class="mt-8">
            <div class="wallet-item">
                <h4 class="heading">Total Cash</h4>
                <p class="figure">₦ 304,000,000,000</p>
                <p class="total">
                    <span class="alt-text">
                        <IconUsers />
                        ₦ 304,000,000
                    </span>
                    -₦ 304,000,000
                </p>
            </div>
            <div class="wallet-item">
                <h4 class="heading">Total Cash</h4>
                <p class="figure">₦ 304,000,000,000</p>
                <p class="total">
                    <span class="alt-text">
                        <IconUsers />
                        ₦ 304,000,000
                    </span>
                    -₦ 304,000,000
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wallet-wrapper {
    background: #F7F8F9 0% 0% no-repeat padding-box;
    border-radius: 24px;
    padding: 24px;
}

.title {
    font-size: 18px;
    font-weight: bold;
    color: #262626;
}

.wallet-item {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
}

.heading {
    font-size: 12px;
    color: #787879;
    margin-bottom: 14px;
}

.figure {
    font-size: 16px;
    color: #4B4B4D;
    font-weight: 600;
    margin-bottom: 8px;
}

.total {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-style: italic;
    font-weight: 500;
}

.total .alt-text {
    display: flex;
    color: #005674;
    font-weight: 500;
    font-size: 12px;
    align-items: center;
    gap: 6px;
    font-style: normal;
}
</style>