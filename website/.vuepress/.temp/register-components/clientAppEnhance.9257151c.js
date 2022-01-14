import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("demoBlock", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/loong-totem-view/website/.vuepress/components/demoBlock.vue"))),
  app.component("buttonDemo", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/loong-totem-view/website/.vuepress/components/demo/buttonDemo.vue"))),
  app.component("lgTag", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/loong-totem-view/website/.vuepress/components/demo/lgTag.vue"))),
  app.component("tagDemo", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/loong-totem-view/website/.vuepress/components/demo/tagDemo.vue")))
}
