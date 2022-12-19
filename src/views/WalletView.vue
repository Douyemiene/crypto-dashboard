<script setup lang="ts">

import IconHide from '@/assets/icons/IconHide.vue';
import IconCash from '@/assets/icons/IconCash.vue';
import DashboardHeader from '@/components/DashboardHeader.vue'
import IconGreenArrowUp from '@/assets/icons/IconGreenArrowUp.vue';
import IconBitcoinLarge from '@/assets/icons/IconBitcoinLarge.vue';
import IconUsers from '@/assets/icons/IconUsers.vue';
import IconDropdown from '@/assets/icons/IconDropdown.vue';
import CryptoCard from '@/components/CryptoCard.vue';
import { ref } from 'vue';


const showDropdown = ref(false);
const showWalletValue = ref(true);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}
const toggleWalletValue = () => {
  showWalletValue.value = !showWalletValue.value
}
</script>

<template>
  <div class="p-8">
    <DashboardHeader title="Wallet" />

    <main class="mt-12">
      <div class="grid grid-cols-3 gap-4">
        <!-- wallet value card -->
        <div class="col-span-1 wallet-card">
          <span class="flex items-center justify-end text-[#F7F8F9] text-xs gap-1">
            <IconGreenArrowUp />
            4%
          </span>
          <div class="text-[#F7F8F9] text-base">
            <span class="text-xs">
              Total Wallet Value
            </span>

            <h3 class="flex items-center gap-4 mt-1 mb-3 text-2xl font-semibold text-white"
              :class="showWalletValue ? '' : 'blur-value'">
              <span>
                ₦ 49,300,450
              </span>
              <IconHide @click="toggleWalletValue" class="cursor-pointer" />
            </h3>

            <span class="flex items-center gap-2 mb-2">
              <IconCash />
              2,400,450,000
            </span>
            <span class="flex items-center gap-2 mb-2">
              <IconCash />
              2,400,450,000
            </span>
          </div>
        </div>
        <!-- currency cards -->
        <div class="flex col-span-2 currency-card">
          <div class="flex-1 p-4">
            <div class="card-info ngn">
              <span class="flex items-center gap-2 font-semibold text-[#262626] text-sm">
                <IconBitcoinLarge />
                NGN
              </span>
              <span class="flex items-center gap-1">
                <IconGreenArrowUp />
                4%
              </span>
            </div>

            <div class="card-info-text">
              <h4 class="heading">Total Cash</h4>
              <p class="figure">304,000,000,000</p>

              <p class="alt-text">
                <IconUsers />
                304,000,000
              </p>
              <p class="total">
                -304,000,000
              </p>
            </div>
          </div>
          <div class="flex-1 p-4 border-l border-gray-200">
            <div class="card-info ksh">
              <span class="flex items-center gap-2 font-semibold text-[#262626] text-sm">
                <IconBitcoinLarge />
                KSH
              </span>
              <span class="flex items-center gap-1">
                <IconGreenArrowUp />
                4%
              </span>
            </div>
            <div class="card-info-text">
              <h4 class="heading">Total Cash</h4>
              <p class="figure">4,000,590</p>

              <p class="alt-text">
                <IconUsers />
                304,000,000
              </p>
              <p class="total">
                -304,000,000
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--crypto wallet -->
      <div class="mt-10 overflow-y-scroll h-[55vh]">
        <!-- mini header -->
        <div class="sticky top-0 z-20 flex items-center justify-between py-3 mb-3 bg-white">
          <h3 class="text-xl font-bold text-[#1E1F21]">
            Crypto Wallet
          </h3>

          <!-- dropdown -->
          <div class="dropdown">
            <button class="flex items-center justify-between text-center px-4 py-2.5 dropdown-button text-xs"
              @click="toggleDropdown">
              Sort
              <IconDropdown />
            </button>

            <!-- Dropdown menu -->
            <div class="absolute z-10 mt-1 dropdown-menu" v-show="showDropdown">
              <ul class="text-xs">
                <li>
                  <a href="#" class="block px-4 py-2 text-[#646464] text-sm">Balance</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-[#646464] text-sm">Alphabetical</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- crypto cards -->
        <div class="grid grid-cols-5 gap-3 h-[90%]">
          <CryptoCard v-for="i in 20" />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.wallet-card {
  padding: 24px 24px 24px 16px;
  background: #112E46 0% 0% no-repeat padding-box;
  border-radius: 24px;
  height: 192px;
}

.blur-value span {
  color: transparent;
  text-shadow: 0 0 8px #000;
}

.currency-card {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 2px solid #E8EAF2;
  border-radius: 24px;
  height: 192px;
}

.card-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 16px 16px 8px 8px;
}

.card-info.ngn {
  background: #EBF6F2 0% 0% no-repeat padding-box;
}

.card-info.ksh {
  background: #F9F2E9 0% 0% no-repeat padding-box;
}

.card-info-text {
  display: flex;
  flex-direction: column;
  margin-top: 12px;
}

.heading {
  font-size: 12px;
  color: #787879;
  margin-bottom: 10px;
}

.figure {
  font-size: 18px;
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
  opacity: 0.5;
  margin-top: 4px;
}

.alt-text {
  display: flex;
  color: #005674;
  font-weight: 500;
  font-size: 12px;
  align-items: center;
  gap: 6px;
  font-style: normal;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background: #FCFCFC 0% 0% no-repeat padding-box;
  border: 2px solid #E7EAF4;
  border-radius: 10px;
  width: 143px;
}

.dropdown .dropdown-menu {
  display: block;
  background: #EBEBEB 0% 0% no-repeat padding-box;
  border: 2px solid #E7EAF4;
  min-width: 60px;
  width: 100%;
  border-radius: 4px 4px 10px 10px;
}
</style>
