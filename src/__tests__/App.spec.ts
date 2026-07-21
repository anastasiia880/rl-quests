import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'
import CounterCard from '../components/CounterCard.vue'

describe('App', () => {
  it('renders the HelloVue greeting', () => {
    const wrapper = mount(App)

    expect(wrapper.text()).toContain('Hello Vue')
  })

  it('passes its count down to CounterCard', () => {
    const wrapper = mount(App)

    expect(wrapper.getComponent(CounterCard).props('count')).toBe(0)
  })

  it('updates parent state when the child emits change', async () => {
    const wrapper = mount(App)
    const card = wrapper.getComponent(CounterCard)

    await card.vm.$emit('change', 7)

    expect(card.props('count')).toBe(7)
    expect(wrapper.get('.status').text()).toContain('7')
  })

  it('reflects derived parity in the parent', async () => {
    const wrapper = mount(App)
    const card = wrapper.getComponent(CounterCard)

    expect(wrapper.get('.status').text()).toContain('even')

    await card.vm.$emit('change', 3)

    expect(wrapper.get('.status').text()).toContain('odd')
  })

  it('records a history of values via watch', async () => {
    const wrapper = mount(App)
    const card = wrapper.getComponent(CounterCard)

    await card.vm.$emit('change', 1)
    await card.vm.$emit('change', 2)

    expect(wrapper.get('.history').text()).toContain('1 → 2')
  })

  it('resets the count when the child emits reset', async () => {
    const wrapper = mount(App)
    const card = wrapper.getComponent(CounterCard)

    await card.vm.$emit('change', 9)
    expect(card.props('count')).toBe(9)

    await card.vm.$emit('reset')

    expect(card.props('count')).toBe(0)
  })

  it('drives the round trip through a real button click', async () => {
    const wrapper = mount(App)

    await wrapper.get('button[aria-label="Increment"]').trigger('click')

    expect(wrapper.get('.value').text()).toBe('1')
  })
})
