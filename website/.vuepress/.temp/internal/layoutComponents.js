import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/loong-totem-view/website/.vuepress/theme/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("C:/Users/Getech-200107-1/Desktop/loong-totem-view/website/.vuepress/theme/layouts/Layout.vue")),
}
