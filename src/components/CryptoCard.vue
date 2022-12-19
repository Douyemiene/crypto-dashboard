<script setup lang="ts">
import IconOption from '@/assets/icons/IconOption.vue'
import IconTether from '@/assets/icons/IconTether.vue'
import IconSend from '@/assets/icons/IconSend.vue'
import IconReceive from '@/assets/icons/IconReceive.vue'
import IconBitcoinLarge from '@/assets/icons/IconBitcoinLarge.vue';
import IconUsers from '@/assets/icons/IconUsers.vue';
import IconWithdrawToken from '@/assets/icons/IconWithdrawToken.vue';
</script>

<template>
    <div class="wrapper">
        <div class="card-header">
            <span class="flex items-center gap-2 font-semibold text-[#262626] text-sm">
                <IconTether />
                NGN
            </span>
            <span class="flex items-center gap-1.5">
                <IconSend />
                <IconReceive />
                <IconOption />
            </span>
        </div>

        <!-- card info -->
        <div class="px-2 mt-4">
            <!-- card info item -->
            <div class="mb-4 ">
                <h4 class="text-[#4B4B4D] text-xl font-semibold">
                    0.585
                </h4>
                <p class="text-[#787879] text-xs">
                    ~ ₦ 11,988
                </p>
            </div>
            <!-- alt card info item -->
            <div class="mb-4">
                <h4 class="flex items-center gap-2 text-[#005674] text-xl font-semibold">
                    <IconUsers />
                    0.585
                </h4>
                <p class="text-[#787879] text-xs">
                    ~ ₦ 11,988
                </p>
            </div>

            <div class="status">
                <p>-0.2034</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #E8EAF2;
    border-radius: 24px;
    padding: 8px;
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: #F7F8F9 0% 0% no-repeat padding-box;
    border-radius: 16px 16px 8px 8px;
}

.status {
    background: #EBF6F2 0% 0% no-repeat padding-box;
    border-radius: 25px;
    padding: 8px 10px;
}

.status p {
    color: #3DAA7E;
    font-size: 14px;
}

.status.negative {
    background: #FBE5E5 0% 0% no-repeat padding-box;
}

.status.negative p {
    color: #D60000;
}
</style>