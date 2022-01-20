import type { App } from 'vue'
import LgButton from '@loong-totem-view/button'
import LgTag from '@loong-totem-view/tag'
import { version as version_ } from './version'
const version = version_
const components = [
  LgButton,
  LgTag
]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  LgButton,
  LgTag
}

export default {
  version,
  install,
}