import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 80,
    marginRight: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: colors.black,
  },
});

export default styles;
