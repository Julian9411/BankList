import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    alignItems: 'center',
  },
  img: {
    borderRadius: 50,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: colors.gray,
  },
});
