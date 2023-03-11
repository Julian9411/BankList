import {FlatList, Pressable, Text, View, Image} from 'react-native';
import React, {FC} from 'react';
import {ListProps} from './props';
import style from './style';
import {HomeNavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';

export const List: FC<ListProps> = ({data}) => {
  const navigation = useNavigation<HomeNavigationProp['navigation']>();

  return (
    <FlatList
      data={data}
      testID="listBanks"
      renderItem={({item}) => (
        <Pressable
          style={style.itemContainer}
          testID="bankItem"
          onPress={() => navigation.navigate('BANK', {data: item})}>
          <Image
            style={style.img}
            source={{uri: item.url, width: 50, height: 50}}
          />
          <View>
            <Text style={style.title}>{item.bankName}</Text>
            <Text style={style.description}>{item.description}</Text>
          </View>
        </Pressable>
      )}
    />
  );
};
