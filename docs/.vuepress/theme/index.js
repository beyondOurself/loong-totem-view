const { path } = require('@vuepress/utils')
const { createPage } = require('@vuepress/core')
const loongTheme = (options, app) => {
  
    return {
        name: 'vuepress-theme-loong',
        extends: '@vuepress/theme-default',
        layouts: {
            Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
            404: path.resolve(__dirname, 'layouts/404.vue'),
        },
        async onInitialized(app) {
            // 如果主页不存在
            if (app.pages.every((page) => page.path !== '/')) {
                // 创建一个主页
                const homepage = await createPage(app, {
                    path: '/',
                    // 设置 frontmatter
                    frontmatter: {
                        home: true,
                        layout: 'Layout',
                    },
                    // 设置 markdown 内容
                    content: `\
# 欢迎来到 ${app.options.title}

这是默认主页
`,
                })
                // 把它添加到 `app.pages`
                app.pages.push(homepage)
            }
        }
    }

}

module.exports = loongTheme