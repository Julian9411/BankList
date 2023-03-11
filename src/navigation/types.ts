import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {bankProps} from '../redux/slices/bankListSlice';

export type HomeStackParamList = {
  LIST: undefined;
  BANK: {data: bankProps};
};

export type HomeNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'LIST'
>;
export type BankNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'BANK'
>;
