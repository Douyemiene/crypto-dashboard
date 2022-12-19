<script setup lang="ts">
import { ref } from 'vue'
import IconCloseExtra from '@/assets/icons/IconCloseExtra.vue'

import MenuTab from '@/components/Tab.vue'
import DashboardOverview from '@/components/DashboardOverview.vue'
import TradeVolume from '@/components/TradeVolume.vue'
import WalletInfo from '@/components/DashboardWalletInfo.vue'
import ActivityLog from '@/components/ActivityLog.vue'
import PriceMovement from '@/components/PriceMovement.vue'
import DashboardHeader from '@/components/DashboardHeader.vue'
import ButtonTab from '@/components/ButtonTab.vue'
import MenuTabs from '@/components/MenuTabs.vue'
import GroupedTabs from '@/components/GroupedTabs.vue'

const showSideMenu = ref(true);

const toggleSideMenu = () => {
  showSideMenu.value = !showSideMenu.value
}

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

      <div class="col-span-2" :class="showSideMenu ? '' : 'col-span-full'">
        <div class="flex items-center justify-between mb-4">
          <!-- menu tabs -->
          <MenuTabs />

          <!-- grouped tab -->
          <GroupedTabs />

          <!-- toggle side menu -->
          <IconCloseExtra class="ml-4" @click="toggleSideMenu" v-show="!showSideMenu" />
        </div>

        <!-- Dashboard overview -->
        <DashboardOverview />

        <div class="grid grid-cols-2 gap-4 my-4">
          <TradeVolume />
          <WalletInfo />
        </div>
      </div>

      <div class="relative col-span-1 pl-8 mt-2 border-l border-gray-200" v-show="showSideMenu">
        <IconCloseExtra class="absolute top-0 -left-3.5" @click="toggleSideMenu" />
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
</style>