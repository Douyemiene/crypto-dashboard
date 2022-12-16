<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    tag: string
    active?: boolean
}>()

const isActive = ref(true)

</script>

<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
    <!-- <div class="button-tab active">
        {{props.tag}}
    </div> -->
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