import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from './Home';
import Catalog from './Catalog';
import CatalogPlant from './CatalogPlant';
import NewPlant from './NewPlant';
import Search from './Search';
import Registration from './Registration';
import Watering from './Watering';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const StartNavigator = createSwitchNavigator({  
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  ForgotPassword: { screen: ForgotPassword },

  Main: { screen: Home }
}
);

// const AppNavigator = createStackNavigator({

//   Home: { screen: Home },
//   Catalog: { screen: Catalog},
//   CatalogPlant: {screen: CatalogPlant},
//   NewPlant: {screen: NewPlant},
//   Search: {screen: Search},
//   Watering: {screen: Watering},
//   Registration: {screen: Registration}
// }
// );

const App = createSwitchNavigator({ Home: MainNavigator }, { headerMode: 'none' });

export default App;