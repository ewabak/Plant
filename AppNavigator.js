import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from './Home';
import Catalog from './Catalog';
import CatalogPlant from './CatalogPlant';
import NewPlant from './NewPlant';
import Search from './Search';
import Registration from './Registration';
import Watering from './Watering';
import Burger from './Burger';
import Settings from '/Settings';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const AppNavigator = createStackNavigator({

  Home: { screen: Home },
   Catalog: { screen: Catalog},
   CatalogPlant: {screen: CatalogPlant},
   NewPlant: {screen: NewPlant},
   Search: {screen: Search},
   Watering: {screen: Watering},
   Registration: {screen: Registration},
   Burger: {screen: Burger},
   Settings: {screen: Settings}
 }
 );

 const App = createSwitchNavigator({ Home: MainNavigator }, { headerMode: 'none' });

export default App;