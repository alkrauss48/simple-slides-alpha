import { shallowMount, VueWrapper } from '@vue/test-utils'
import { useRouter } from 'vue-router'

import ProgressType from '../../enums/progressType.ts'
import QueryParams from '../../interfaces/queryParams.ts'
import SlideView from '../../components/SlideView.vue'
import router from '../../router/index.ts'
import dataStore from '../../store/dataStore.ts'

vi.mock('vue-router');

vi.mocked(useRouter).mockReturnValue({
  ...router,
  replace: vi.fn(),
})

beforeEach(() => {
  vi.mocked(useRouter().replace).mockReset()
})

const mountWrapper = () : VueWrapper<any> => {
  dataStore.data = ['foo', 'bar', 'baz'];

  return shallowMount(SlideView, {
    props: {
      params: <QueryParams>{
        index: 1,
        progress: ProgressType.Bar,
      },
    }
  });
};

test('sets props', () => {
  const wrapper = mountWrapper();

  expect(wrapper.props().params.index).toBe(1);
  expect(wrapper.props().params.progress).toBe(ProgressType.Bar);
});

test('gets content', () => {
  const wrapper = mountWrapper();

  expect(wrapper.vm.content).toBe('bar');
});

test('returns showProgressBar as true', () => {
  const wrapper = mountWrapper();

  expect(wrapper.vm.showProgressBar).toBeTruthy();
});

test('returns showProgressBar as false', () => {
  const wrapper = mountWrapper();

  wrapper.vm.props.params.progress = ProgressType.Label;

  expect(wrapper.vm.showProgressBar).toBeFalsy();
});

test('returns showProgressLabel as true', () => {
  const wrapper = mountWrapper();

  wrapper.vm.props.params.progress = ProgressType.Label;

  expect(wrapper.vm.showProgressLabel).toBeTruthy();
});

test('returns showProgressLabel as false', () => {
  const wrapper = mountWrapper();

  expect(wrapper.vm.showProgressLabel).toBeFalsy();
});

test('incrementCount increments index and calls router replace', () => {
  const wrapper = mountWrapper();
  wrapper.vm.incrementContent(1);

  expect(wrapper.vm.index).toBe(2);
  expect(useRouter().replace).toHaveBeenCalled();
});

test('incrementCount increments index only to max, and calls router replace', () => {
  const wrapper = mountWrapper();
  wrapper.vm.incrementContent(5);

  expect(wrapper.vm.index).toBe(2);
  expect(useRouter().replace).toHaveBeenCalled();
});

test('incrementCount decrements index and calls router replace', () => {
  const wrapper = mountWrapper();
  wrapper.vm.incrementContent(-1);

  expect(wrapper.vm.index).toBe(0);
  expect(useRouter().replace).toHaveBeenCalled();
});

test('incrementCount decrements index only to min, and calls router replace', () => {
  const wrapper = mountWrapper();
  wrapper.vm.incrementContent(-5);

  expect(wrapper.vm.index).toBe(0);
  expect(useRouter().replace).toHaveBeenCalled();
});

// NOTE: keydown events aren't being triggered via the following:
//
// test('pressing the right key increments the slide', async () => {
//   const wrapper = mountWrapper();
//   await wrapper.trigger('keydown', { key: 'right' });
//
//   expect(wrapper.vm.index).toBe(2);
// });
//
// test('pressing the left key decrements the slide', async () => {
//   const wrapper = mountWrapper();
//   await wrapper.trigger('keydown', { key: 'left' });
//
//   expect(wrapper.vm.index).toBe(0);
// });
