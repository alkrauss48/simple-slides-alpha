import { beforeEach } from 'vitest'
import { shallowMount, VueWrapper } from '@vue/test-utils'

import dataStore from '../../store/dataStore.ts'
import ProgressLabel from '../../components/ProgressLabel.vue'

const mountWrapper = () : VueWrapper<any> => {
  dataStore.data = Array(16).fill('');

  return shallowMount(ProgressLabel, {
    props: {
      current: 4,
    }
  });
};

let wrapper = mountWrapper();

beforeEach(async () => {
  wrapper = mountWrapper();
})

test('sets props', () => {
  expect(wrapper.props().current).toBe(4);
});

test('gets label', () => {
  expect(wrapper.vm.label).toBe('4 / 16');
});
