import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.primaryGreen,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledContainer: {
    width: 120,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.lightgrey,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    color: colors.white,
  },
  disabledTitle: {
    fontSize: 14,
    color: colors.white,
  },
});

export default styles;
