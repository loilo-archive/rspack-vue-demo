<script setup>
let props = defineProps({
  modelValue: {
    type: Number,
    required: true
  }
})
let emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <h1>Counter: {{ modelValue }}</h1>
    <button @click="emit('update:modelValue', modelValue + 1)">
      Increment
    </button>
  </div>
</template>
