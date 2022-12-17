<script setup lang="ts">
import IconCloseExtra from '@/assets/icons/IconCloseExtra.vue'

import { ref } from 'vue'
import MenuTab from '@/components/MenuTab.vue'
import DashboardOverview from '@/components/DashboardOverview.vue'
import TradeVolume from '@/components/TradeVolume.vue'
import WalletInfo from '@/components/DashboardWalletInfo.vue'
import ActivityLog from '@/components/ActivityLog.vue'
import PriceMovement from '@/components/PriceMovement.vue'
import DashboardHeader from '@/components/DashboardHeader.vue'
import ButtonTab from '@/components/ButtonTab.vue'

const activeMenuTab = ref(true);

const activityTab = ref(true)
const priceTab = ref(false)

const selectActiveTab = (tab: string) => {
  if (tab === 'activity') {
    activityTab.value = true
    priceTab.value = false
  }
  if (tab === 'price') {
    priceTab.value = true
    activityTab.value = false
  }
}

</script>

<template>
  <div class="p-8">
    <DashboardHeader title="Dashboard" />

    <main class="grid grid-cols-3 gap-8 mt-12">
      <div class="col-span-2">
        <div class="flex items-center justify-between mb-4">
          <!-- menu tabs -->
          <div class="flex items-center flex-1 gap-4">
            <MenuTab tag="Today" />
            <MenuTab tag="7 Days" />
            <MenuTab tag="30 Days" />
            <MenuTab tag="All Time" :active="activeMenuTab" />
          </div>
          <!-- group tab -->
          <div class="group-tab">
            <span class="active">All</span>
            <span>NG</span>
            <span>KE</span>
          </div>
        </div>

        <!-- Dashboard overview -->
        <DashboardOverview />

        <div class="grid grid-cols-2 gap-4 my-4">
          <TradeVolume />
          <WalletInfo />
        </div>
      </div>

      <div class="relative col-span-1 pl-8 mt-2 border-l border-gray-200">
        <IconCloseExtra class="absolute top-0 -left-3.5" />
        <div class="flex items-center gap-4 mb-4">
          <ButtonTab tag="activity log" @click="selectActiveTab('activity')" :active="activityTab" />
          <span>
            •
          </span>
          <ButtonTab tag="price movement" @click="selectActiveTab('price')" :active="priceTab" />
        </div>

        <ActivityLog v-show="activityTab" />

        <PriceMovement v-show="priceTab" />
      </div>
    </main>

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