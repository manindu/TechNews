import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  coverImage: {
    width,
    aspectRatio: 16 / 9,
    backgroundColor: 'yellow',
  },
  title: {
    color: colors.black,
    fontSize: 22,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  sourceRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeAgo: {
    color: colors.darkerGrey,
  },
  logo: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginRight: 10,
  },
  sourceContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    fontSize: 16,
    color: colors.black,
    lineHeight: 25,
    marginBottom: height * 0.2,
  },
  button: {
    width: '80%',
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.primaryGreen,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonContainer: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: colors.transparentWhite,
    position: 'absolute',
    bottom: 0,
  },
});

export default styles;
