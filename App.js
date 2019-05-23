import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Catalog from './Catalog';
import CatalogPlant from './CatalogPlant';
import NewPlant from './NewPlant';



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