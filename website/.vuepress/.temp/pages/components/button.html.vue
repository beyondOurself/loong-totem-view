<template><h1 id="button" tabindex="-1"><a class="header-anchor" href="#button" aria-hidden="true">#</a> button</h1>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<demo-block> <template #source><div class="language-vue ext-vue"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">lg-button</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">lg-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;sass&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div></div></template>
                            <template #description> 演示 demo1</template>
                            <template #code>
                               <div class='code_box-hidden'  data-code='<template>
  <div>
      <lg-button></lg-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
}
</script>
<style lang="sass">
</style>
'></div>
                            </template>
                            <template #demo  >
                              <buttonDemo1></buttonDemo1>
                            </template>
                            </demo-block>
                            
                        <h2 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h2>
<demo-block> <template #source><div class="language-vue ext-vue"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    这是  buttonDemo2 444</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;less&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre></div></template>
                            <template #description> 演示 demo2</template>
                            <template #code>
                               <div class='code_box-hidden'  data-code='<template>
  <div>
    这是  buttonDemo2 444
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
}
</script>
<style lang="less">
</style>
'></div>
                            </template>
                            <template #demo  >
                              <buttonDemo2></buttonDemo2>
                            </template>
                            </demo-block>
                            
                        <h2 id="文字按钮" tabindex="-1"><a class="header-anchor" href="#文字按钮" aria-hidden="true">#</a> 文字按钮</h2>
<demo-block> <template #source><div class="language-vue ext-vue"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">File not found</span></span></code></pre></div></template>
                            <template #description> 演示 2</template>
                            <template #code>
                               <div class='code_box-hidden'  data-code='File not found'></div>
                            </template>
                            <template #demo  >
                              <buttonDemo></buttonDemo>
                            </template>
                            </demo-block>
                            
                        <h2 id="图标按钮" tabindex="-1"><a class="header-anchor" href="#图标按钮" aria-hidden="true">#</a> 图标按钮</h2>
<demo-block> <template #source><div class="language-vue ext-vue"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">File not found</span></span></code></pre></div></template>
                            <template #description> 演示 2</template>
                            <template #code>
                               <div class='code_box-hidden'  data-code='File not found'></div>
                            </template>
                            <template #demo  >
                              <buttonDemo></buttonDemo>
                            </template>
                            </demo-block>
                            
                        <h2 id="按钮组" tabindex="-1"><a class="header-anchor" href="#按钮组" aria-hidden="true">#</a> 按钮组</h2>
<demo-block> <template #source><div class="language-vue ext-vue"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">File not found</span></span></code></pre></div></template>
                            <template #description> 演示 2</template>
                            <template #code>
                               <div class='code_box-hidden'  data-code='File not found'></div>
                            </template>
                            <template #demo  >
                              <buttonDemo></buttonDemo>
                            </template>
                            </demo-block>
                            
                        <h2 id="加载中" tabindex="-1"><a class="header-anchor" href="#加载中" aria-hidden="true">#</a> 加载中</h2>
<demo-block> <template #source><div class="language-vue ext-vue"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">File not found</span></span></code></pre></div></template>
                            <template #description> 演示 2</template>
                            <template #code>
                               <div class='code_box-hidden'  data-code='File not found'></div>
                            </template>
                            <template #demo  >
                              <buttonDemo></buttonDemo>
                            </template>
                            </demo-block>
                            
                        <h2 id="各种尺寸的尺寸按钮" tabindex="-1"><a class="header-anchor" href="#各种尺寸的尺寸按钮" aria-hidden="true">#</a> 各种尺寸的尺寸按钮</h2>
<demo-block> <template #source><div class="language-vue ext-vue"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">File not found</span></span></code></pre></div></template>
                            <template #description> 演示 2</template>
                            <template #code>
                               <div class='code_box-hidden'  data-code='File not found'></div>
                            </template>
                            <template #demo  >
                              <buttonDemo></buttonDemo>
                            </template>
                            </demo-block>
                            
                        <h2 id="自定义颜色" tabindex="-1"><a class="header-anchor" href="#自定义颜色" aria-hidden="true">#</a> 自定义颜色</h2>
<demo-block> <template #source><div class="language-vue ext-vue"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">File not found</span></span></code></pre></div></template>
                            <template #description> 演示 2</template>
                            <template #code>
                               <div class='code_box-hidden'  data-code='File not found'></div>
                            </template>
                            <template #demo  >
                              <buttonDemo></buttonDemo>
                            </template>
                            </demo-block>
                            
                        <h2 id="button-属性" tabindex="-1"><a class="header-anchor" href="#button-属性" aria-hidden="true">#</a> Button 属性</h2>
<demo-block> <template #source><div class="language-vue ext-vue"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">File not found</span></span></code></pre></div></template>
                            <template #description> 演示 2</template>
                            <template #code>
                               <div class='code_box-hidden'  data-code='File not found'></div>
                            </template>
                            <template #demo  >
                              <buttonDemo></buttonDemo>
                            </template>
                            </demo-block>
                            
                        <h2 id="button-插槽" tabindex="-1"><a class="header-anchor" href="#button-插槽" aria-hidden="true">#</a> Button 插槽</h2>
<demo-block> <template #source><div class="language-vue ext-vue"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">File not found</span></span></code></pre></div></template>
                            <template #description> 演示 2</template>
                            <template #code>
                               <div class='code_box-hidden'  data-code='File not found'></div>
                            </template>
                            <template #demo  >
                              <buttonDemo></buttonDemo>
                            </template>
                            </demo-block>
                            
                        <h2 id="button-group-属性" tabindex="-1"><a class="header-anchor" href="#button-group-属性" aria-hidden="true">#</a> Button Group 属性</h2>
<demo-block> <template #source><div class="language-vue ext-vue"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">File not found</span></span></code></pre></div></template>
                            <template #description> 演示 2</template>
                            <template #code>
                               <div class='code_box-hidden'  data-code='File not found'></div>
                            </template>
                            <template #demo  >
                              <buttonDemo></buttonDemo>
                            </template>
                            </demo-block>
                            
                        <h2 id="button-group-插槽" tabindex="-1"><a class="header-anchor" href="#button-group-插槽" aria-hidden="true">#</a> button Group 插槽</h2>
<demo-block> <template #source><div class="language-vue ext-vue"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">File not found</span></span></code></pre></div></template>
                            <template #description> 演示 2</template>
                            <template #code>
                               <div class='code_box-hidden'  data-code='File not found'></div>
                            </template>
                            <template #demo  >
                              <buttonDemo></buttonDemo>
                            </template>
                            </demo-block>
                            
                        </template>
