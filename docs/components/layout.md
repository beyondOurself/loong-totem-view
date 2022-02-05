# Layout 布局

通过基础的24分栏，极速简便地布局

::: tip
 TIP
 组件默认使用Flex布局，不需要手动设置 <code>type="flex"</code>.
 请注意父容器避免使用<code>inline</code> 相关演示，会导致组件宽度不能撑满
:::


# 基础布局
使用列创建基础网格布局。
通过 <code>row</code> 和 <code>col</code> 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。
:::demo 
@[code vue](@demo/layoutDemo1.vue)
:::

# 分栏间隔

:::demo 
@[code vue](@demo/layoutDemo2.vue)
:::


# 混合布局
:::demo 
@[code vue](@demo/layoutDemo3.vue)
:::

# 列偏移
:::demo 
@[code vue](@demo/layoutDemo4.vue)
:::

# 对齐方式
:::demo 
@[code vue](@demo/layoutDemo5.vue)
:::

# 响应式布局
:::demo 
@[code vue](@demo/layoutDemo6.vue)
:::

# 基于断点的隐藏类
Element Plus 额外提供了一系列类名，用于在某些条件下隐藏元素。 这些类名可以添加在任何 DOM 元素或自定义组件上。 如果需要，请自行引入以下文件
```ts{}
import 'element-plus/theme-chalk/display.css'
```

这些类名为 ： 

<code>hidden-xs-only</code> - 当视口在 xs 尺寸时隐藏  
<code>hidden-sm-only </code>- 当视口在 sm 尺寸时隐藏  
<code>hidden-sm-and-down </code>- 当视口在 sm 及以下尺寸时隐藏  
<code>hidden-sm-and-up</code> - 当视口在 sm 及以上尺寸时隐藏  
<code>hidden-md-only </code>- 当视口在 md 尺寸时隐藏  
<code>hidden-md-and-down</code> - 当视口在 md 及以下尺寸时隐藏  
<code>hidden-md-and-up</code> - 当视口在 md 及以上尺寸时隐藏  
<code>hidden-lg-only </code>- 当视口在 lg 尺寸时隐藏  
<code>hidden-lg-and-down </code>- 当视口在 lg 及以下尺寸时隐藏  
<code>hidden-lg-and-up </code>- 当视口在 lg 及以上尺寸时隐藏  
<code>hidden-xl-only </code>- 当视口在 xl 尺寸时隐藏  

# Row 属性

| 属性 | 说明 | 类型|  可选值 | 默认值
| :---: | :---: |:---: |:---: |:---: |
| gutter |栅格间隔 | string| —— |0|
| justify | lex 布局下的水平排列方式 | number|start/end/center/space-around/space-between |start|
| align |flex 布局下的垂直排列方式 |string | top/middle/bottom |top|
| tag | 自定义元素标签 |string|*|div|

# Row 插槽

# Col 属性 
 
# Col 插槽