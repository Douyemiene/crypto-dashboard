<script setup lang="ts">
import { ref, onMounted } from 'vue';

const tabs = ref([])
const selectedIndex = ref(0)


</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
.button-tab {
  font-size: 18px;
  font-weight: bold;
  color: #1E1F21;
  opacity: .5;
}

.active {
  font-size: 18px;
  font-weight: bold;
  color: #1E1F21;
  opacity: 1;
}
</style>