import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import Home from './Home';
import Catalog from './Catalog';
import CatalogPlant from './CatalogPlant';
import NewPlant from './NewPlant';
import Search from './Search';
import Login from './Login';
import SignUp from './SignUp';
import Burger from './Burger';
import Settings from './Settings';
import Watering from './Watering';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';
import FavPlant from './FavPlant';
import * as firebase from 'firebase';
import config from "./config";
import { YellowBox } from 'react-native';
import _ from 'lodash';



YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }};


firebase.auth().signInWithEmailAndPassword("gabriela.lenard0@gmail.com","password")

const AppNavigator = createStackNavigator(
  
{ Home: { screen: Home,
    navigationOptions: { header: null } },
  Catalog: { screen: Catalog,
    navigationOptions: { header: null } },
  CatalogPlant: { screen: CatalogPlant,
    navigationOptions: { header: null } },
  NewPlant: { screen: NewPlant,
    navigationOptions: { header: null } },
  Search: { screen: Search,
    navigationOptions: { header: null } },
  Login: { screen: Login,
    navigationOptions: { header: null } },
  SignUp: { screen: SignUp,
    navigationOptions: { header: null } },
  ForgotPassword: { screen: ForgotPassword,
    navigationOptions: { header: null } },
  Watering: { screen: Watering,
    navigationOptions: { header: null } },
  Burger: { screen: Burger,
    navigationOptions: { header: null } },
  Settings: { screen: Settings,
    navigationOptions: { header: null } },
  FavPlant: { screen: FavPlant,
    navigationOptions: { header: null } },
  ChangePassword: { screen: ChangePassword,
    navigationOptions: { header: null } },
},

{
    initialRouteName: 'Home',
}

);

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    }

    if (!firebase.apps.length) { firebase.initializeApp(config.FirebaseConfig); }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
}
onAuthStateChanged = (user) => {
  this.setState({isAuthenticationReady: true});
  this.setState({isAuthenticated: !!user});
}
  render() {
    
    return <AppContainer  />;
  }
}
_loadResourcesAsync = async () => {
  return Promise.all([
    Asset.loadAsync([
      require('./images/burger.png'),
      require('./images/lis.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
    }),
  ]);
};

_handleLoadingError = error => {
  // In this case, you might want to report the error to your error
  // reporting service, for example Sentry
  console.warn(error);
};

_handleFinishLoading = () => {
  this.setState({ isLoadingComplete: true });
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;