<template>
  <div>
    <slot>this is Button </slot>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LgButton',
  props: { },
  setup(props) {
    // init here
  },
})
</script>
<style scoped>
</style>
