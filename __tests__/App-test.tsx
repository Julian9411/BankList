import React from 'react';
import {render, screen} from '@testing-library/react-native';
import axios from 'axios';
import mockAxios from 'jest-mock-axios';
import 'react-native-gesture-handler/jestSetup';

import App from '../src/App';
import StoreProvider from '../src/redux/StoreProvider';
import {Bank, BankList} from '../src/pages';
import bankListMock from '../__mocks__/bankListMock.json';
import {List} from '../src/components';
import {getData} from '../src/utils/getData';
import store from '../src/redux/store';
import {getBanks} from '../src/redux/slices/bankListSlice';
import {NavigationContainer} from '@react-navigation/native';

beforeEach(() => {
  mockAxios.reset();
});

test('App init', () => {
  render(<App />);
});

test('render list', () => {
  render(
    <NavigationContainer>
      <StoreProvider>
        <BankList />
      </StoreProvider>
    </NavigationContainer>,
  );

  expect(screen.getByTestId('titleList').children[0]).toBe('List of the banks');
});

test('render List banks', async () => {
  axios.get = jest.fn().mockResolvedValue({
    data: bankListMock,
  });
  render(
    <NavigationContainer>
      <List data={bankListMock} />
    </NavigationContainer>,
  );

  const banks = screen.findAllByTestId('bankItem');
  expect(await banks).toHaveLength(5);
});

describe('call API', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test('successfully call', async () => {
    const expectedData = bankListMock;
    mockAxios.get.mockResolvedValueOnce(Promise.resolve(expectedData));
    const response = await getData('');
    expect(response).toEqual(expectedData);
  });
});

test('bankListSlice', () => {
  render(
    <NavigationContainer>
      <StoreProvider>
        <BankList />
      </StoreProvider>
    </NavigationContainer>,
  );
  let state = store.store.getState().bankList;
  const initialBookCount = state.bankList.length;
  store.store.dispatch(getBanks(bankListMock));

  expect(state.bankList.length).toBe(initialBookCount);
});
