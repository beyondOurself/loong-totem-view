import { App } from 'vue'
import Utils from './src/index.vue'

Utils.install = (app: App): void => {
  app.component(Utils.name, Utils)
}

export default Utils
