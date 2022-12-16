<script setup lang="ts">
import IconBitcoinLarge from '@/assets/icons/IconBitcoinLarge.vue'
import IconTether from '@/assets/icons/IconTether.vue'
import IconDash from '@/assets/icons/IconDash.vue'
import IconLitecoin from '@/assets/icons/IconLitecoin.vue'
</script>

<template>
    <div class="volume-wrapper">
        <h3 class="title">
            Trade Volume
        </h3>

        <div class="mt-9">
            <div class="data-item">
                <span class="flex items-center gap-2">
                    <IconBitcoinLarge />
                    BTC 0.45
                </span>

                ₦ 400,000,000
            </div>
            <div class="data-item">
                <span class="flex items-center gap-2">
                    <IconTether />
                    USDT 2,304
                </span>

                ₦ 400,000,000
            </div>
            <div class="data-item">
                <span class="flex items-center gap-2">
                    <IconDash />
                    DASH 40
                </span>

                ₦ 400,000,000
            </div>
            <div class="data-item">
                <span class="flex items-center gap-2">
                    <IconLitecoin />
                    LTC 4
                </span>

                ₦ 400,000,000
            </div>
        </div>
    </div>
</template>

<style scoped>
.volume-wrapper {
    background: #262626 0% 0% no-repeat padding-box;
    border-radius: 24px;
    padding: 24px;
}

.title {
    font-size: 20px;
    font-weight: bold;
    color: var(--white)
}

.data-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--white);
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 28px;
}
</style>