const { path } = require('@vuepress/utils')
const myplugin = require('./myplugin')

module.exports = {
    title: '',
    theme: path.resolve(__dirname, 'theme/index.js'),
    markdown: {
        importCode: {
            handleImportPath: (str) =>
                str.replace(/^@demo/, path.resolve(__dirname, 'components/demo/')),
        },
        code: {
            lineNumbers:false
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
                        const description = tokenInfo.info.replace(/\s*demo(.*)/igs, '$1');
                        const demoCompName = token.meta.importPath.replace(/.*\/(.*)\.vue$/igs, '$1')
                        return `</template>
                            <template #description>${description}</template>
                            <template #code>
                               <div class='code_box-hidden' data-code='${content}'></div>
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
        }]
    ],
}
