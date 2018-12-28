import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  listContainer: {
    width: '100%',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightgrey,
    marginVertical: 10,
  },
});

export default styles;
