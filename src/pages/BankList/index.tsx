import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../../redux/store';
import {getBanks} from '../../redux/slices/bankListSlice';
import {List} from '../../components';
import style from './style';
import {getData} from '../../utils/getData';

export const BankList = () => {
  const dispatch = useDispatch();
  const firstCharge = useSelector(
    (state: RootState) => state.bankList.firstCharge,
  );
  const banksList = useSelector((state: RootState) => state.bankList.bankList);

  useEffect(() => {
    if (!firstCharge) {
      getData('https://dev.obtenmas.com/catom/api/challenge/banks').then(res =>
        dispatch(getBanks(res)),
      );
    }
  }, [dispatch, firstCharge]);

  return (
    <View testID="bankList">
      <Text testID="titleList" style={style.title}>
        List of the banks
      </Text>
      <List data={banksList} />
    </View>
  );
};
