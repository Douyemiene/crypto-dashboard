<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideNav from './components/SideNav.vue';
</script>

<template>
  <main class="flex w-screen h-screen">
    <SideNav />
    <RouterView class="flex-1 overflow-y-scroll"/>
  </main>
</template>

<style>

</style>