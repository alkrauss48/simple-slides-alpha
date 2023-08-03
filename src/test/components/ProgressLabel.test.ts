import { beforeEach } from 'vitest'
import { shallowMount, VueWrapper } from '@vue/test-utils'

import ProgressLabel from '../../components/ProgressLabel.vue'

const mountWrapper = () : VueWrapper<any> => {
  return shallowMount(ProgressLabel, {
    props: {
      current: 4,
      total: 16,
    }
  });
};

let wrapper = mountWrapper();

beforeEach(async () => {
  wrapper = mountWrapper();
})

test('sets props', () => {
  expect(wrapper.props().current).toBe(4);
  expect(wrapper.props().total).toBe(16);
});

test('gets label', () => {
  expect(wrapper.vm.label).toBe('4 / 16');
});
