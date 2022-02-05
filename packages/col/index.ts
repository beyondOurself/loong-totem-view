import { App } from 'vue'
import { SFCWithInstall } from '@loong-totem-view/utils/types'

import Col from './src/col'

Col.install = (app: App): void => {
  app.component(Col.name, Col)
}
export default Col
