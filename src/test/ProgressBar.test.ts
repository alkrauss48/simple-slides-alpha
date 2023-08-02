import { beforeEach } from 'vitest'
import { shallowMount, VueWrapper } from '@vue/test-utils'

import ProgressBar from '../components/ProgressBar.vue'

const mountWrapper = () : VueWrapper<any> => {
  return shallowMount(ProgressBar, {
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

test('gets percentage', () => {
  expect(wrapper.vm.percentage).toBe(25);
});

test('gets percentage label', () => {
  expect(wrapper.vm.percentageLabel).toBe('25%');
});

test('gets style', () => {
  expect(wrapper.vm.style).toStrictEqual({
    width: '25%',
  });
});
