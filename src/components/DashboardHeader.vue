<script setup lang="ts">
import IconWithdrawToken from '@/assets/icons/IconWithdrawToken.vue'
import IconDepositToken from '@/assets/icons/IconDepositToken.vue'
import IconBitcoin from '@/assets/icons/IconBitcoin.vue'
import IconDropdown from '@/assets/icons/IconDropdown.vue'
import IconDropdownShape from '@/assets/icons/IconDropdownShape.vue'
import IconProfilePlaceholder from '@/assets/icons/IconProfilePlaceholder.vue'
import IconTether from '@/assets/icons/IconTether.vue'
import IconDash from '@/assets/icons/IconDash.vue'
import IconLitecoin from '@/assets/icons/IconLitecoin.vue'
import { ref } from 'vue';

const props = defineProps<{
  title: string
}>()

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}
</script>

<template>
  <header class="sticky top-0 z-50 flex items-center justify-between">
    <h1 class="text-2xl font-bold capitalize">{{ props.title }}</h1>

    <div class="flex items-center gap-3 icons">
      <!-- NGN dropdown -->
      <div class="ngn-dropdown">
        <button class="inline-flex items-center text-center p-1.5 ngn-dropdown-button text-xs">
          NGN
          <IconDropdown />
        </button>
        <!-- Dropdown menu -->
        <div class="absolute z-10 hidden mt-1 ngn-dropdown-menu">
          <ul class="text-xs">
            <li>
              <a href="#" class="block px-4 py-2 text-gray-400">XXX</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-gray-400">XXX</a>
            </li>
          </ul>
        </div>
      </div>

      <IconWithdrawToken />
      <IconDepositToken />

      <!-- price dropdown -->
      <div class="price-dropdown" :class="showDropdown ? 'no-box-shadow' : ''">
        <button class="inline-flex items-center gap-1 p-2 text-xs text-center" @click="toggleDropdown">
          <IconBitcoin />
          Bitcoin price: ₦23,456,000
          <IconDropdownShape />
        </button>
        <!-- Dropdown menu -->
        <div class="absolute z-10 w-full pb-3 price-dropdown-content border-x" v-show="showDropdown">
          <ul class="px-2 text-xs">
            <li class="flex items-center cursor-pointer">
              <IconTether />
              <a href="#" class="block px-2 py-2 text-[#787879] text-xs">USDT</a>
            </li>
            <li class="flex items-center cursor-pointer">
              <IconDash />
              <a href="#" class="block px-2 py-2 text-[#787879] text-xs">Dash</a>
            </li>
            <li class="flex items-center cursor-pointer">
              <IconLitecoin />
              <a href="#" class="block px-2 py-2 text-[#787879] text-xs">Litecoin</a>
            </li>
          </ul>
        </div>
      </div>

      <IconProfilePlaceholder />

    </div>
  </header>
</template>

<style scoped>
.ngn-dropdown {
  position: relative;
  display: inline-block;
}

.ngn-dropdown-button {
  background: #FCFCFC 0% 0% no-repeat padding-box;
  border: 2px solid #E7EAF4;
  border-radius: 10px 10px 4px 4px;
}

.ngn-dropdown:hover .ngn-dropdown-menu {
  display: block;
  background: #EBEBEB 0% 0% no-repeat padding-box;
  border: 2px solid #E7EAF4;
  min-width: 60px;
  width: 100%;
  border-radius: 4px 4px 10px 10px;
}

.price-dropdown {
  position: relative;
  display: inline-block;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 0px #262626;
  border-radius: 8px;
}

.price-dropdown.no-box-shadow {
  border-radius: 0px;
  box-shadow: none;
}

.price-dropdown-content {
  transition: all 0.5s ease-out;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 0px #262626;
  border-radius: 0px 0px 8px 8px;
}
</style>