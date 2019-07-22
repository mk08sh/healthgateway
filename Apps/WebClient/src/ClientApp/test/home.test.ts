import { shallowMount, createLocalVue } from '@vue/test-utils'
import HomeComponent from '@/views/home.vue'

describe('Home view', () => {
  const localVue = createLocalVue();
  const wrapper = shallowMount(HomeComponent, { localVue });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  const expectedH1Text = "Health Gateway";
  test(`has header element with "${expectedH1Text}" text`, () => {
    expect(wrapper.find('h1').text()).toBe(expectedH1Text);
  })
})
