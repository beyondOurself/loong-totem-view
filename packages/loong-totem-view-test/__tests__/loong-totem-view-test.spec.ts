import { mount } from '@vue/test-utils'
import LoongTotem-view-test from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('LoongTotem-view-test.vue', () => {
  test('render test', () => {
    const wrapper = mount(LoongTotem-view-test, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
