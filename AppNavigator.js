import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Catalog from './Catalog';
import CatalogPlant from './CatalogPlant';
import NewPlant from './NewPlant';
import Search from './Search';
import Registration from './Registration';
import Watering from './Watering';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },

  Catalog: { screen: Catalog},
  
  CatalogPlant: {screen: CatalogPlant},
  
  NewPlant: {screen: NewPlant},

  Search: {screen: Search},

  Watering: {screen: Watering},

  Registration: {screen: Registration}
}
);
const App = createStackNavigator({ Home: MainTabNavigator }, { headerMode: 'none' });

export default App;