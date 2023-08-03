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

test('sets props', () => {
  const wrapper = mountWrapper();

  expect(wrapper.props().current).toBe(4);
  expect(wrapper.props().total).toBe(16);
});

test('gets percentage', () => {
  const wrapper = mountWrapper();

  expect(wrapper.vm.percentage).toBe(25);
});

test('gets percentage for 0 total', () => {
  const wrapper: VueWrapper<any> = shallowMount(ProgressBar, {
    props: {
      current: 0,
      total: 0,
    }
  });

  expect(wrapper.vm.percentage).toBe(0);
});

test('gets percentage label', () => {
  const wrapper = mountWrapper();

  expect(wrapper.vm.percentageLabel).toBe('25%');
});

test('gets style', () => {
  const wrapper = mountWrapper();

  expect(wrapper.vm.style).toStrictEqual({
    width: '25%',
  });
});
