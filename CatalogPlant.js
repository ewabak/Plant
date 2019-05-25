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
} from 'react-native';
import styles from "./styles";
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class CatalogPlant extends React.Component {

  constructor(props){
    super(props);
 }
 state = {
  data: ''
}

  componentDidMount(){
  const { navigation } = this.props;
  const linkPlant = navigation.getParam('linkPlant');

    fetch('https://trefle.io/api/plants/103505?token=Ymgra1d5M1dCaUlmMWgyME9qNVhTdz09&fbclid=IwAR3FY03yEVzS77Ca1Q9TIbMdMlJhXtpOjhcqcD-MJHAYJXCNcdA3UrJ2p9Q')
    .then(response => response.json())
   .then((responseJson)=> {
     this.setState({
      data: responseJson
     })
   })
   .catch(error=>console.log(error)) 
   }

 //  renderItem=(data)=>

   //  <TouchableOpacity style={styles.list}>
     //       <Text style={styles.lightText}>{data.item.varieties[0].common_name}</Text> 
   //  </TouchableOpacity>

   images=() => {
    if(this.state.data.images)
        return this.state.data.images.map(images => images.url)
}


render(){
  // console.log(this.state.data.dataSource);
  const { data } = this.state;
 
   

     return(
      <ScrollView style={styles.containerxd}>
        <TouchableOpacity style={styles.textStyle}>
      <Image
         source={require('./images/burger.png')}
         
         style={styles.ImageIconStyle} />
  </TouchableOpacity>

     <View style={styles.white}>

            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}> 
      <Text>{this.state.data.scientific_name}</Text>
      <Text>{this.state.data.common_name}</Text>
      <Text>{this.state.data.shade_tolerance}</Text>
      <Text>{this.state.data.moisture_use}</Text>
      <Text>{this.images()}</Text>
      


      <Image source = {this.images()} style = {{width: 160, height: 120}}/>

      {/* <Image style={styles.image} source={stringify(this.images())} /> */}


      
      </View>
      </View>
    </ScrollView>
     );}

}

export default CatalogPlant;

//            <Text>{(linkPlant)}</Text>


/**
 
componentDidMount(){
   const { navigation } = this.props;
  const linkPlant = navigation.getParam('linkPlant');

    fetch(linkPlant + '?token=/////FY03yEVzS77Ca1Q9TIbMdMlJhXtpOjhcqcD-MJHAYJXCNcdA3UrJ2p9Q')
    .then(response => response.json())
   .then((responseJson)=> {
     this.setState({
      loading: false,
      dataSource: responseJson
     })
   })
   .catch(error=>console.log(error)) 
   }

   renderItem=(data)=>

     <TouchableOpacity style={styles.list}>
            <Text style={styles.lightText}>{data.item.varieties[0].common_name}</Text> 
     </TouchableOpacity>

     render(){

     return(

            <View> 
      <FlatList
         data= {this.state.dataSource}
         renderItem= {item=> this.renderItem(item)}
         keyExtractor= {item=>item.id.toString()} />
      </View>

    </ScrollView>
     );}




 */