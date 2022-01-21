import { mount } from '@vue/test-utils'
import Utils from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Utils.vue', () => {
  test('render test', () => {
    const wrapper = mount(Utils, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
