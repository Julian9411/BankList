import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {HomeStackParamList} from './types';

import {Bank, BankList} from '../pages';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: FC<{initialRouteName?: 'LIST' | 'BANK'}> = ({
  initialRouteName,
}) => (
  <Stack.Navigator initialRouteName={initialRouteName}>
    <Stack.Screen
      name="LIST"
      component={BankList}
      options={() => ({
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="BANK"
      component={Bank}
      options={({route}) => ({
        title: route.params.data.bankName,
      })}
    />
  </Stack.Navigator>
);

export default HomeStack;
