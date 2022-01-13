import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("buttonDemo", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/vuepress/vp2/docs/.vuepress/components/buttonDemo.vue"))),
  app.component("demoBlock", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/vuepress/vp2/docs/.vuepress/components/demoBlock.vue"))),
  app.component("lgButton", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/vuepress/vp2/docs/.vuepress/components/lgButton.vue"))),
  app.component("lgTagV2", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/vuepress/vp2/docs/.vuepress/components/lgTagV2.vue"))),
  app.component("demo-lgTag", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/vuepress/vp2/docs/.vuepress/components/demo/lgTag.vue")))
}
