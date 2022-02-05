import LgButton from '../button/src/index.vue'
import LgTag from '../tag/src/index.vue'
import LgIcon from '../icon/src/index.vue'
import LgRow from '../row/src/row'

import LgCol from '../col/src/col'

import { version as version_ } from './version'
const version = version_
const components = [
  LgButton,
  LgTag,
  LgIcon,
  LgCol,
  LgRow
]

const install = (app) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  LgButton,
  LgTag,
  LgIcon,
  LgRow,
  LgCol
}

export default {
  version,
  install,
}