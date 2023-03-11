import {View, Text, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

import {BankNavigationProp} from '../../navigation/types';
import style from './style';

export const Bank = () => {
  const route = useRoute<BankNavigationProp['route']>();
  const {url, bankName, description, age} = route?.params?.data;
  return (
    <>
      <Image source={{uri: url, height: 200}} resizeMode="cover" />
      <View style={style.containerText}>
        <Text style={style.titleBank}>{bankName}</Text>
        <Text style={style.textBank}>{description}</Text>
        <View style={style.containerAge}>
          <Text style={[style.textBank, style.titleAge]}>age:</Text>
          <Text style={style.textBank}>{age}</Text>
        </View>
      </View>
    </>
  );
};
