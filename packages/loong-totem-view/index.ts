import type { App } from 'vue'
import LgButton from '@loong-totem-view/button'
import LgTag from '@loong-totem-view/tag'
import LgIcon from '@loong-totem-view/icon'
import LgRow from '@loong-totem-view/row'
import LgCol from '@loong-totem-view/col'
import { version as version_ } from './version'
const version = version_
const components = [
  LgButton,
  LgTag,
  LgIcon,
  LgRow,
  LgCol
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