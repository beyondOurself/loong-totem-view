<template>
  <div>
    <slot>这是tag</slot>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LgTag',
  props: { },
  setup(props) {
    // init here
  },
})
</script>
<style scoped>
</style>
