import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home, Article } from '../screens';
import { colors } from '../theme';

const RootNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Tech News',
      headerStyle: {
        backgroundColor: colors.white,
        elevation: 0,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24,
      },
    }),
  },
  Article: {
    screen: Article,
    navigationOptions: () => ({
      headerTransparent: true,
      headerTintColor: colors.white,
    }),
  },
});

const AppContainer = createAppContainer(RootNavigator);

export default AppContainer;
