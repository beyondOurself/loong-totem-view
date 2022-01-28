<template>
  <div class="demo-block">
   
     

    <div class="demo-block--description">
      <slot name="description"></slot>
    </div>
    <div class="demo-block__content">
      <div class="content_operate">
        <span
          class="icon-fuzhi_wrap copy-btn"
          data-clipboard-target="#copy-content"
          @click="clipboardWrite"
        >
            <lg-icon name='fuzhi1'></lg-icon>
        </span>
        <slot name="code"></slot>
        <span class="icon-code_wrap" @click="codeShowTrigger()">
               <lg-icon name='code'></lg-icon>
        </span>
      </div>

      <div class="content_demo">
        <slot name="demo"></slot>
      </div>
    </div>
    <div
      class="source"
      :style="{ height: `${sourceHeight}px` }"
      ref="sourceEl"
    >
      <slot name="source"></slot>
    </div>
  </div>
</template>
<script>
  // import '../public/iconfont.js'
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

.icon-code,.icon-fuzhi {
  font-size: 1.5em;
  color: var(--c-text);
}
.demo-block__content {
  border: 1px solid var(--c-border);
  overflow: hidden;
}
.content_operate {
  border-bottom: 1px solid var(--c-border);
  padding: $v-padding;
  text-align: right;
}
.content_demo {
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
.source {
  height: 0;
  overflow: hidden;

  transition-property: height;
  transition-duration: 1s;
  perspective: 1000px;
  transform-style: preserve-3d;

  border: 1px solid var(--c-border);
  padding: $v-padding;
  border-top: 0px;
}
.demo-block--description {
  padding: 2em 1em;
}
</style>