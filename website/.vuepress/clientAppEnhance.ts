import { defineClientAppEnhance } from '@vuepress/client'
import loong from '../../packages/loong-totem-view-test/index.js'
export default defineClientAppEnhance(({ app, router, siteData }) => {

    // console.log('siteData', siteData)
    app.use(loong)
     
})