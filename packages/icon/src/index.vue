<template>
    <i :class="`loong-icons lg-icon-${name}`"> </i>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LgIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
})
</script>
