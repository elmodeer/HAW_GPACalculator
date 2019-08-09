import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';

const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Info: InfoScreen
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#ffff',
          },
      }
    }
);

const Container = createAppContainer(AppNavigator);
export default Container;
