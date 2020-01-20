import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen'
import DetailsScreen from './DelailsScreen'

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Details: {screen: DetailsScreen},
  },
  {
      initialRouteName: 'Home',
  }
  );
  
  export default createAppContainer(MainNavigator);
