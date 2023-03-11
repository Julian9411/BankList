import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface bankProps {
  description: string;
  age: number;
  url: string;
  bankName: string;
}

export interface bankListProps {
  bankList: bankProps[];
  firstCharge: boolean;
}

const initialState: bankListProps = {
  bankList: [],
  firstCharge: false,
};

export const bankList = createSlice({
  name: 'banks',
  initialState,
  reducers: {
    getBanks: (state, action: PayloadAction<bankProps[]>) => {
      state.bankList = action.payload;
      state.firstCharge = true;
    },
  },
});

export const {getBanks} = bankList.actions;

export default bankList.reducer;
