<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader.vue';


</script>

<template>
  <div class="p-8">
    <DashboardHeader title="Dashboard" />

    <main class="flex flex-col items-center justify-center mt-12 h-[50vh]">
      <h1 class="text-3xl">
        Sorry, this page doesn't exist!
      </h1>
      <RouterLink to="/" class="py-2 px-4 my-4 bg-[#646464] text-white rounded-2xl">Back to Dashboard</RouterLink>
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
