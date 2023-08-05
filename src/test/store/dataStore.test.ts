import dataStore from '../../store/dataStore.ts'

afterEach(() => {
  dataStore.reset()
})

test('gets the right initial values', async () => {
  expect(dataStore.data).toStrictEqual([]);
});

test('can reset to initial values', async () => {
  dataStore.data = ['1', '2', '3'];

  expect(dataStore.data).toStrictEqual(['1', '2', '3']);

  dataStore.reset();

  expect(dataStore.data).toStrictEqual([]);
});
