import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CounterCard from '../CounterCard.vue'

describe('CounterCard', () => {
  it('renders the count passed down as a prop', () => {
    const wrapper = mount(CounterCard, { props: { count: 5 } })

    expect(wrapper.get('.value').text()).toBe('5')
  })

  it('renders the label prop, falling back to a default', () => {
    expect(
      mount(CounterCard, { props: { count: 0 } })
        .get('.label')
        .text(),
    ).toBe('Counter')

    const labelled = mount(CounterCard, { props: { count: 0, label: 'Quest counter' } })
    expect(labelled.get('.label').text()).toBe('Quest counter')
  })

  it('derives doubled from the count reactively', async () => {
    const wrapper = mount(CounterCard, { props: { count: 3 } })
    expect(wrapper.get('.derived').text()).toContain('6')

    await wrapper.setProps({ count: 10 })
    expect(wrapper.get('.derived').text()).toContain('20')
  })

  it('emits change with the incremented value', async () => {
    const wrapper = mount(CounterCard, { props: { count: 4 } })

    await wrapper.get('button[aria-label="Increment"]').trigger('click')

    expect(wrapper.emitted('change')).toEqual([[5]])
  })

  it('emits change with the decremented value', async () => {
    const wrapper = mount(CounterCard, { props: { count: 4 } })

    await wrapper.get('button[aria-label="Decrement"]').trigger('click')

    expect(wrapper.emitted('change')).toEqual([[3]])
  })

  it('respects the step prop when emitting', async () => {
    const wrapper = mount(CounterCard, { props: { count: 0, step: 5 } })

    await wrapper.get('button[aria-label="Increment"]').trigger('click')

    expect(wrapper.emitted('change')).toEqual([[5]])
  })

  it('does not mutate the prop itself, only emits', async () => {
    const wrapper = mount(CounterCard, { props: { count: 1 } })

    await wrapper.get('button[aria-label="Increment"]').trigger('click')

    expect(wrapper.get('.value').text()).toBe('1')
  })

  it('disables reset at zero and emits it otherwise', async () => {
    const atZero = mount(CounterCard, { props: { count: 0 } })
    expect(atZero.get('.reset').attributes('disabled')).toBeDefined()

    const nonZero = mount(CounterCard, { props: { count: 2 } })
    await nonZero.get('.reset').trigger('click')
    expect(nonZero.emitted('reset')).toHaveLength(1)
  })
})
