<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="bg-[#F7F8F9] flex flex-col h-screen w-[267px] py-8 pl-8">

    <h1 class="w-32 p-2 text-base font-semibold text-center bg-[#BDC6CC] rounded-xl">[Client Logo]</h1>

    <ul class="nav">
      <li class="nav-item">
        <RouterLink to="/">Dashboard</RouterLink>
        <span class="active-link"></span>
      </li>
      <li class="nav-item sub-menu">
        Wallet

        <ul class="hidden mt-4">
          <li class="nav-item">
            <RouterLink to="/wallet">Overview</RouterLink>
            <span class="active-link"></span>
          </li>
          <li class="nav-item">
            <RouterLink to="/wallet/income">Income</RouterLink>
            <span class="active-link"></span>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <RouterLink to="/transactions">Transactions</RouterLink>
        <span class="active-link"></span>
      </li>
      <li class="nav-item">
        <RouterLink to="/trades">Trades</RouterLink>
        <span class="active-link"></span>
      </li>
      <li class="nav-item">
        <RouterLink to="/users">Users</RouterLink>
        <span class="active-link"></span>
      </li>
      <li class="nav-item">
        <RouterLink to="/settings">Settings</RouterLink>
        <span class="active-link"></span>
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
  padding: 0 1rem;
  color: #1E1F21;
  cursor: pointer;
  transition: all .5s ease-out;
}

.nav .nav-item.sub-menu {
  padding-right: 0;
  transition: all .5s ease-out;
}

.nav .nav-item.sub-menu ul .nav-item {
  font-weight: normal;
  font-size: 16px;
  padding-left: 2rem;
  color: #646464;
}

/* display sub menu on hover or when sub menu item is active */
.nav .nav-item.sub-menu:hover ul,
.nav .nav-item.sub-menu ul:has(a.router-link-exact-active) {
  display: block;
}

.nav .nav-item a {
  color: #1E1F21;
}

.nav .nav-item:hover,
.nav .nav-item a:hover,
.nav .nav-item.sub-menu .nav-item:hover {
  color: var(--green-soft);
}


.nav .nav-item a.router-link-exact-active {
  color: var(--green);
  font-weight: 600;
}

/* parent style for sub menu nav item */
.nav .nav-item.sub-menu:has(a.router-link-exact-active) {
  color: var(--black);
  font-weight: 600;
}

/* style for span block when nav item is active */
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
</style>
