import { defineComponent, computed, h, provide } from 'vue'

export default defineComponent({
    name: 'LgRow',
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        gutter: {
            type: Number,
            default: 0,
        },
        type: {
            type: String,
            default: '',
        },
        justify: {
            type: String,
            default: 'start',
        },
        align: {
            type: String,
            default: 'top',
        },
    },
    setup(props, { slots }) {
        const gutter = computed(() => props.gutter)
        provide('LgRow', {
            gutter,
        })

        const style = computed(() => {
            const ret = {
                marginLeft: '',
                marginRight: '',
            }
            if (props.gutter) {
                ret.marginLeft = `-${props.gutter / 2}px`
                ret.marginRight = ret.marginLeft
            }
            return ret
        })

        return () =>
            h(
                props.tag,
                {
                    class: [
                        'lg-row',
                        props.justify !== 'start' ? `is-justify-${props.justify}` : '',
                        props.align !== 'top' ? `is-align-${props.align}` : '',
                        props.type === 'flex' ? 'lg-row--flex' : '',
                    ],
                    style: style.value,
                },
                slots.default?.(),
            )
    },
})
