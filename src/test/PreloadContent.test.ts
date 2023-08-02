import { beforeEach } from 'vitest'
import { shallowMount, VueWrapper } from '@vue/test-utils'

import PreloadContent from '../components/PreloadContent.vue'

const mountWrapper = () : VueWrapper<any> => {
  return shallowMount(PreloadContent, {
    props: {
      data: ['foo', 'bar', 'baz'],
    }
  });
};

let wrapper = mountWrapper();

beforeEach(async () => {
  wrapper = mountWrapper();
})

test('sets props', () => {
  expect(wrapper.props().data).toStrictEqual(['foo', 'bar', 'baz']);
});

test('shows the data as text', () => {
  expect(wrapper.text()).toContain('foo');
  expect(wrapper.text()).toContain('bar');
  expect(wrapper.text()).toContain('baz');
});
