import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  image: {
    borderRadius: 5,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  bottomRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeAgo: {
    color: colors.darkerGrey,
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 40,
    marginRight: 5,
  },
  sourceContainer: {
    width: '50%',
    flexDirection: 'row',
  },
});

export default styles;
