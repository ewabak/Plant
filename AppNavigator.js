import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Catalog from './Catalog';


const AppNavigator = createStackNavigator({
  Home: { screen: Home,
   },
  Catalog: { screen: Catalog},
  
  }
);
const App = createStackNavigator({ Home: MainTabNavigator }, { headerMode: 'none' });

export default App;