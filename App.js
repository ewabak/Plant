import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Catalog from './Catalog';

const AppNavigator = createStackNavigator(
  
{
  Home: { screen: Home },
  Catalog: { screen: Catalog },
  
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