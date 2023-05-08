<template>
  <div>
    <CheckBox
      v-for="option in options"
      :key="option"
      :checked="value.includes(option.id)"
      :fieldId="option.name"
      :label="option.name"
      @update:checked="check(option.id, $event)"
    />
  </div>
</template>

<script setup lang="ts">
import CheckBox from './CheckBox.vue';

const props = withDefaults(
  defineProps<{
    value?: any[];
    options: any[];
  }>(),
  {
    value: () => [],
    options: () => [],
  },
);

const emit = defineEmits(['update:value']);

const check = (optionId: any, checked: any) => {
  let updatedValue = [...props.value];
  if (checked) {
    updatedValue.push(optionId);
  } else {
    updatedValue.splice(updatedValue.indexOf(optionId), 1);
  }
  emit('update:value', updatedValue);
};
</script>
