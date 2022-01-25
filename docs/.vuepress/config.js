const { path } = require('@vuepress/utils')

module.exports = {
    lang: 'zh-CN',
    title: '',
    description: 'Loong Totem View',
    base: '/loong-totem-view/',
    theme: '@vuepress/theme-default',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
    },
    themeConfig: {
        logo: '/loong.png',
        navbar: [
            // NavbarItem
            {
                text: '组件',
                link: '/components/button.html',
            },
        ],

        sidebar: [

            {
                text: 'Basic 基础组件',
                children: [
                    '/components/button.md',
                    '/components/tag.md',
                    '/components/icon.md',
                ]
            },
            {
                text: 'Form表单组件',
                children: [

                ]
            },
            {
                text: 'Data数据展示',
                children: [

                ]
            },
            {
                text: 'Navigation 导航',
                children: [

                ]
            },
            {
                text: 'Feedback 反馈组件',
                children: [

                ]
            },
            {
                text: 'Others 其他',
                children: [

                ]
            },

        ]
    },
    markdown: {
        importCode: {
            handleImportPath: (str) => {
                const dir = str.replace(/.*\/(.*)Demo.*vue/igs, "$1")
                return str.replace(/^@demo/, path.resolve(__dirname, `components/demo/${dir}`))
            }
        },
        code: {
            lineNumbers: false
        }
    },
    plugins: [

        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
                componentsPatterns: ['**/*.vue'],
                getComponentName(filename) {
                    const reFilename = path.trimExt(filename.replace(/.*\/(.*).vue/gis, '$1'))
                    return reFilename
                }
            },

        ],
        [
            '@vuepress/container',
            {
                type: 'demo',
                locales: {
                    '/': {
                        defaultInfo: '演示',
                    },
                },
                validate(params) {
                    //函数在开始标记后验证尾部，成功时返回true
                    return params.trim().match(/^demo\s*(.*)$/);
                },
                render(tokens, idx, options, env, self) {
                    const {
                        component = 'demo-block'
                    } = options;
                    const componentName = component
                    if (tokens[idx].nesting === 1) {
                        // 开始标签
                        return `<${componentName}> <template #source>`
                    } else {
                        const token = tokens[idx - 1]
                        const tokenInfo = tokens[idx - 2]
                        // 结束标签
                        const content = token.content

                        const descriptions = tokenInfo.info.replace(/\s*demo(.*)\+(.*)\+/igs, '$1||$2').split("||");

                        const preDesc = descriptions[0]
                        const nextCody = descriptions[1]

                        const demoCompName = token.meta.importPath.replace(/.*\/(.*)\.vue$/igs, '$1')
                        return `</template>
                            <template #description>${preDesc}</template>
                            <template #code>
                               <div class='code_box-hidden'  data-code='${nextCody}'></div>
                            </template>
                            <template #demo  >
                              <${demoCompName}></${demoCompName}>
                            </template>
                            </${componentName}>
                            
                        `;

                    }

                }
            },
        ],
        ['@vuepress/plugin-shiki', {
            theme: 'css-variables'
        }],

    ],
}
