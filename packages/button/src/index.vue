<template>
  <div class="lg-button">
    <slot>我改变了</slot>
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
