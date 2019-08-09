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
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadious: 2,
            eleavtion: 1
          },
      }
    }
);

const Container = createAppContainer(AppNavigator);
export default Container;
