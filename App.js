import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'HAW gpa calculator'
    }
  }
  );

export default createAppContainer(navigator);

