import { defineClientAppEnhance } from '@vuepress/client'
import loong from '../../packages/loong-totem-view-test/index.js'
import icons from '../../packages/loong-totem-view-icons/lib/es.index'
//import loong from '../../packages/loong-totem-view/lib/es.index'
export default defineClientAppEnhance(({ app, router, siteData }) => {

    // console.log('siteData', siteData)
    app.use(loong)
    app.use(icons)
     
})