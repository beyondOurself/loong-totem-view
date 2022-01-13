import { App } from 'vue'
import LoongTotem-view-theme from './src/index.vue'

LoongTotem-view-theme.install = (app: App): void => {
  app.component(LoongTotem-view-theme.name, LoongTotem-view-theme)
}

export default LoongTotem-view-theme
