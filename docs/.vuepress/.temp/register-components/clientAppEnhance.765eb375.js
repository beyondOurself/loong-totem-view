import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("undefined", defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/vuepress/vp2/docs/.vuepress/components/demo/lgTag.vue")))
}
