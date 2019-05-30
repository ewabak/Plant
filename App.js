import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Catalog from './Catalog';
import CatalogPlant from './CatalogPlant';
import NewPlant from './NewPlant';
import Search from './Search';
import Login from './Login';
import * as firebase from 'firebase';
import config from "./config";

firebase.auth().signInWithEmailAndPassword("gabriela.lenard0@gmail.com","password")

const AppNavigator = createStackNavigator(
  
{
  Home: { screen: Home,
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
},

{
    initialRouteName: 'Home',
}

);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  constructor (props) {
    super(props);

    if (!firebase.apps.length) { firebase.initializeApp(config.FirebaseConfig); }
}
  render() {
    return <AppContainer  />;
  }
}