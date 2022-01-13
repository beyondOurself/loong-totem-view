import { mount } from '@vue/test-utils'
import LoongTotem-view-theme from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('LoongTotem-view-theme.vue', () => {
  test('render test', () => {
    const wrapper = mount(LoongTotem-view-theme, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
