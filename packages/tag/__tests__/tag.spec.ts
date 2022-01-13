import { mount } from '@vue/test-utils'
import Tag from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Tag.vue', () => {
  test('render test', () => {
    const wrapper = mount(Tag, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
