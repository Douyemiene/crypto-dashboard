<script setup lang="ts">
import IconBitcoinLarge from '@/assets/icons/IconBitcoinLarge.vue'
import IconTether from '@/assets/icons/IconTether.vue'
import IconDash from '@/assets/icons/IconDash.vue'
import IconLitecoin from '@/assets/icons/IconLitecoin.vue'
</script>

<template>
    <div class="px-6 wrapper">
        <div class="sticky top-0 z-20 flex items-center gap-10 pt-6 pb-3 bg-inherit">
            <span class="sort">
                sort ^
            </span>
            <span class="flex-1 text-right sort">
                sort ^
            </span>
            <span class="sort">
                sort ^
            </span>
        </div>

        <div class="mt-4">
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconBitcoinLarge />
                    BTC
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage">
                    +5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconTether />
                    USDT
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage">
                    +5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconDash />
                    DASH
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage">
                    +5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconLitecoin />
                    LTC
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage negative">
                    -5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconBitcoinLarge />
                    BTC
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage">
                    +5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconTether />
                    USDT
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage">
                    +5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconDash />
                    DASH
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage">
                    +5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconLitecoin />
                    LTC
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage negative">
                    -5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconBitcoinLarge />
                    BTC
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage">
                    +5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconTether />
                    USDT
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage">
                    +5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconDash />
                    DASH
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage">
                    +5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconLitecoin />
                    LTC
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage negative">
                    -5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconBitcoinLarge />
                    BTC
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage">
                    +5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconTether />
                    USDT
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage">
                    +5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconDash />
                    DASH
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage">
                    +5%
                </span>
            </div>
            <div class="price-item">
                <span class="flex items-center gap-2">
                    <IconLitecoin />
                    LTC
                </span>

                <span class="amount">
                    ₦ 400,000,000
                </span>

                <span class="percentage negative">
                    -5%
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    background: #F7F8F9 0% 0% no-repeat padding-box;
    border-radius: 24px;
    height: 593px;
    overflow-y: scroll;
}

.sort {
    font-size: 9px;
    color: #646464;
    text-transform: capitalize;
}

.price-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 24px;
    color: #646464;
}

.amount {
    color: #262626;
}

.percentage {
    color: var(--green);
}

.percentage.negative {
    color: #D60000;
}
</style>