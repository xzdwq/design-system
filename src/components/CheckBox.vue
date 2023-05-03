<template>
  <input
    @input="(event) => $emit('update:checked', (event.target as HTMLInputElement).checked)"
    type="checkbox"
    :checked="checked"
    :id="fieldId"
    class="hidden"
  />
  <label :for="fieldId">
    <!-- <i :class="{
        'fa-check-square': checked,
        'fa-square': !checked,
      }"></i> -->
    {{ label }}
  </label>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
  label?: string;
  fieldId: string;
  checked?: boolean;
}>(), {
  label: '',
  fieldId: '',
  checked: false,
});
</script>
