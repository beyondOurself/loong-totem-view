import { defineClientAppEnhance } from '@vuepress/client'
import { path } from '@vuepress/utils'
import loong from '../../packages/loong-totem-view/index.js'
export default defineClientAppEnhance(({ app, router, siteData }) => {

    // console.log('siteData', siteData)
    app.use(loong)
     
})