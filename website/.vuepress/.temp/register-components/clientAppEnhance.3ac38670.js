import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("demoBlock", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/vuepress/vp2/docs/.vuepress/components/demoBlock.vue"))),
  app.component("buttonDemo", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/vuepress/vp2/docs/.vuepress/components/demo/buttonDemo.vue"))),
  app.component("lgTag", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/vuepress/vp2/docs/.vuepress/components/demo/lgTag.vue"))),
  app.component("tagDemo", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/vuepress/vp2/docs/.vuepress/components/demo/tagDemo.vue")))
}
