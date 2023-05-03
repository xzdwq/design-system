<template>
  <div>
    <CheckBoxGroup v-model:value="selectValues" :options="options" />
    <div>{{ selectValues }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import CheckBoxGroup from './components/CheckBoxGroup.vue'

let options = ref([
  { name: "Filter 1", id: 1 },
  { name: "Filter 2", id: 2 },
  { name: "Filter 3", id: 3 },
  { name: "Filter 4", id: 4 },
  { name: "Filter 5", id: 5 },
  { name: "Filter 6", id: 6 },
  { name: "Filter 7", id: 7 },
]
);

let selectValues = ref([]);
</script>
