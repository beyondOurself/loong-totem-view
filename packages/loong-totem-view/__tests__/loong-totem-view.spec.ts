import { mount } from '@vue/test-utils'
import LoongTotem-view from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('LoongTotem-view.vue', () => {
  test('render test', () => {
    const wrapper = mount(LoongTotem-view, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
