<template>
  <div class="--demo-block">
    <div class="--description">
      <slot name="description"></slot>
    </div>
    <div class="--content">
      <div class="--content__operate">
        <span
          class="icon-fuzhi_wrap copy-btn"
          data-clipboard-target="#copy-content"
          @click="clipboardWrite"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fuzhi"></use>
          </svg>
        </span>
        <slot name="code"></slot>
        <span class="icon-code_wrap" @click="codeShowTrigger()">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-code"></use>
          </svg>
        </span>
      </div>

      <div class="--content__demo" >
        <slot name="demo"></slot>
      </div>
    </div>
    <div class="--source" :style="{height:`${sourceHeight}px`}" ref="sourceEl">
      <slot name="source" ></slot>
    </div>
  </div>
</template>
<script>
  import '../public/iconfont.js'
  import Clipboard from 'clipboard'
export default {
   data(){
    return {
      sourceHeight:0,
      sourceSwitch:false
    }
   }, 
   methods: {
      clipboardWrite(){
        console.log("复制")
        var clipboard = new Clipboard('.copy-btn',{
             target: function (trigger) {
                return trigger;
              },
               text: function (trigger) {
              return trigger.nextElementSibling.dataset.code
            },
        })
      clipboard.on('success', e => {
        console.log('复制成功')
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        console.log('该浏览器不支持自动复制')
        // 释放内存
        clipboard.destroy()

        
      })
      },
      codeShowTrigger(){
           const height = this.$refs.sourceEl.firstElementChild.offsetHeight; 
          this.sourceSwitch = !this.sourceSwitch ;
          this.sourceHeight = this.sourceSwitch ? height + 40 : 0;
          
      }
   },
   mounted() {
   },
  
}
</script>
<style lang='scss'>
// vars >

$v-padding: 10px;

// vars <

.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: var(--c-text);
}
.--content {
  border: 1px solid var(--c-border);
  overflow: hidden;
}
.--content__operate {
  border-bottom: 1px solid var(--c-border);
  padding: $v-padding;
  text-align: right;
}
.--content__demo {
  padding: $v-padding * 2;
}
.icon-fuzhi_wrap,
.icon-code_wrap {
  margin-left: 0.5em;
}
.code_box-hidden {
  display: inline-block;
  height: 0;
  width: 0;
}
.--source {
  height: 0;
  overflow: hidden;

  transition-property: height;
  transition-duration: 1s;
  perspective: 1000px;
  transform-style: preserve-3d;

  border: 1px solid var(--c-border);
  padding: $v-padding;
  border-top:0px;

}
.--description{
  padding: 2em 1em;
}
</style>