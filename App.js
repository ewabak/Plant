import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Catalog from './Catalog';
import CatalogPlant from './CatalogPlant';
import NewPlant from './NewPlant';
import Search from './Search';
import * as firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyDWo5CjGYhk9wlO2n4jlywuuGIikoQQBXo",
    authDomain: "bai-plant-898e9.firebaseapp.com",
    databaseURL: "https://bai-plant-898e9.firebaseio.com",
    projectId: "bai-plant-898e9",
    storageBucket: "bai-plant-898e9.appspot.com",
    //messagingSenderId: "73606555056",
    //appId: "1:73606555056:web:19d5e53b6fbd61d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //export const db = app.database();  

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

},

{
    initialRouteName: 'Home',
}

);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer  />;
  }
}