import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home, Sources } from '../screens';
import { colors } from '../theme';

const RootNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home',
      headerStyle: {
        backgroundColor: colors.white,
        elevation: 0,
      },
    }),
  },
  Sources: {
    screen: Sources,
    navigationOptions: () => ({
      title: 'Select Sources',
      headerTransparent: true,
    }),
  },
});

const AppContainer = createAppContainer(RootNavigator);

export default AppContainer;
