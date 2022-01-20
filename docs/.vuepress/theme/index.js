const { path } = require('@vuepress/utils')
const loongTheme = (options, app) => {
  
    return {
        name: 'vuepress-theme-loong',
        extends: '@vuepress/theme-default',
        layouts: {
            Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
            404: path.resolve(__dirname, 'layouts/404.vue'),
        },
    }

}

module.exports = loongTheme