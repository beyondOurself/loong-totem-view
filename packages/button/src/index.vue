<template>
  <button
    :class="[
      'lg-button',
      type ? 'lg-button--' + type : '',
      buttonSize ? 'lg-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': round,
        'is-circle': circle,
      },
    ]"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <i v-if="loading" class="el-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script lang='ts'>
import { defineComponent ,computed} from 'vue'
import { PropType } from 'vue'
import { isValidComponentSize } from '@loong-totem-view/utils/validators'


type IButtonType = PropType<
  'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'
>
type IButtonNativeType = PropType<'button' | 'submit' | 'reset'>


export default defineComponent({
  name: 'LgButton',
  props: {
    type: {
      type: String as IButtonType,
      default: 'default',
      validetor: (val: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'danger',
          'text',
        ].includes(val)
      },
    },
    size: {
      type: String as PropType<string | number>,
      validator: isValidComponentSize,
    },
    icon:{
      type:String,
      default:'', 
    },
    nativeType :{
      type: String  as IButtonNativeType, 
      default:'button', 
      validator:(val : string ) => {
        return ['button','submit','reset'].includes(val)
      }
    },
    loading:Boolean, 
    disabled:Boolean, 
    plain:Boolean, 
    autofocus:Boolean, 
    round:Boolean, 
    circle:Boolean
  },
  emits:['click'], 
  setup(props,ctx) {
    
    const buttonSize = computed(()=> {
      return  props.size
    })

    const buttonDisabled = computed(()=>{

      return props.disabled
    })

    const handleClick = (evt) : void => {
       ctx.emit('click',evt)
    }

     return {
        buttonSize, 
        buttonDisabled, 
        handleClick
     }

  },
})
</script>

