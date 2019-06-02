import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ActivityIndicator,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
    Keyboard
} from 'react-native';
import styles from "./styles";
import { Input, Card, Button } from 'react-native-elements';
import ThreeAxisSensor from 'expo-sensors/build/ThreeAxisSensor';
import { Container, Content } from 'native-base';
import Searcher from './Searcher';

class Search extends React.Component {

    state = {
      searchPlant: '',
      plantData: {}
    }

    plantSearch = () => {

      Keyboard.dismiss()
      const plantName = this.state.searchPlant.toLowerCase();

      const query = 'https://trefle.io//api/plants?q=' + plantName + '&token=Ymgra1d5M1dCaUlmMWgyME9qNVhTdz09&fbclid=IwAR3FY03yEVzS77Ca1Q9TIbMdMlJhXtpOjhcqcD-MJHAYJXCNcdA3UrJ2p9Q'
     
      fetch(query)
      .then(response => response.json())
     .then((responseJson)=> {
       this.setState({
        loading: false,
        dataSource: responseJson
       })
     })
     .catch(error=>console.log(error)) //to catch the errors if any
    }
     
  

     
     renderItem=(data)=>

     <TouchableOpacity onPress={() => this.props.navigation.navigate('CatalogPlant',{linkPlant: data.item.link})} >
            <View style={styles.tabHeader}><Text style={styles.textContent}>{data.item.scientific_name}</Text></View>
            <View style={styles.tabHeader}><Text style={styles.textContent}>{data.item.common_name}</Text></View>
            <View style={styles.space}/>

     </TouchableOpacity>


     
     render(){

      
      if(this.state.loading){
       return( 
         <View style={styles.loader}> 
         <ActivityIndicator size="large" color="#0c9"/>
         </View>
     )}

     return(
      <ScrollView style={styles.containerxd}>
      <TouchableOpacity style={styles.textStyle}>
         <Image
            source={require('./images/burger.png')}
            style={styles.ImageIconStyle} />
     </TouchableOpacity>
     <View style={styles.white}>


<Container>
  <Searcher
      value={this.state.searchPlant}
      onChangeText={(searchPlant) => this.setState({ searchPlant})} 
      plantSearch={this.plantSearch}/>
      
      <View> 
      <FlatList
         data= {this.state.dataSource}
         renderItem= {item=> this.renderItem(item)}
         keyExtractor= {item=>item.id.toString()} />
      </View>

<Content></Content>
</Container>




     
      </View>
    </ScrollView>
     );}


}

export default Search;
