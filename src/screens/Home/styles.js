import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme';

const { height } = Dimensions.get('window');

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
  topRow: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  doneText: {
    fontSize: 16,
    color: colors.black,
  },
  modalTitle: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  filterRow: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedSources: {
    fontSize: 16,
    color: colors.primaryGreen,
  },
  modalContent: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  emptyContainer: {
    width: '100%',
    height: height * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
