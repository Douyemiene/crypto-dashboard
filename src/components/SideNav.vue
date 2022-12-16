<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="bg-[#F7F8F9] flex flex-col h-screen w-[267px] py-8 pl-8">

    <h1 class="w-32 p-3 text-base font-semibold text-center bg-gray-400 rounded-xl">[Client Logo]</h1>

    <ul class="nav">
      <li class="nav-item">
        <RouterLink to="/">Dashboard</RouterLink>
        <span class="active-link"></span>
      </li>
      <li class="nav-item">
        <RouterLink to="/wallet">Wallet</RouterLink>
        <span class="active-link"></span>
      </li>
      <li class="nav-item">
        <!-- <RouterLink to="/transactions">Transactions</RouterLink> -->
        Transactions
      </li>
      <li class="nav-item">
        <!-- <RouterLink to="/trades">Trades</RouterLink> -->
        Trades
      </li>
      <li class="nav-item">
        <!-- <RouterLink to="/users">Users</RouterLink> -->
        Users
      </li>
      <li class="nav-item">
        <!-- <RouterLink to="/settings">Settings</RouterLink> -->
        Settings
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav {
  width: 100%;
  margin-top: 84px;
}

.nav .nav-item {
  font-weight: normal;
  font-size: 20px;
  margin-bottom: 12px;
  position: relative;
  padding: 0 1rem;
  color: #1E1F21;
  cursor: pointer;
}

.nav .nav-item a {
  color: #1E1F21;
}

.nav .nav-item:hover,
.nav .nav-item a:hover {
  color: var(--green-soft);
}


.nav .nav-item a.router-link-exact-active {
  color: var(--green);
  font-weight: 600;
}

.nav .nav-item a.router-link-exact-active+.active-link {
  position: absolute;
  top: 50%;
  right: 0;
  width: 40%;
  height: 2px;
  background-color: var(--green);
  opacity: 1;
  transition: 0.4s;
}

/* @media (min-width: 1024px) {
 
} */
</style>
