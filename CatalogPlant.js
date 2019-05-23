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

  componentDidMount(){
    const { navigation } = this.props;
  const linkPlant = navigation.getParam('linkPlant');
    fetch("https://trefle.io/api/plants/103505?token=Ymgra1d5M1dCaUlmMWgyME9qNVhTdz09&fbclid=IwAR3FY03yEVzS77Ca1Q9TIbMdMlJhXtpOjhcqcD-MJHAYJXCNcdA3UrJ2p9Q")
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

<TouchableOpacity style={styles.list}>
              <Text style={styles.lightText}>{data.item.scientific_name}</Text> 
     </TouchableOpacity>
     

render(){

  


  return(
   <ScrollView style={styles.containerxd}>
   <TouchableOpacity style={styles.textStyle}>
      <Image
         source={require('./images/burger.png')}
         style={styles.ImageIconStyle} />
  </TouchableOpacity>
  <View style={styles.white}>
  <View style={styles.space}/>
  
   
  <View> 
      <FlatList
         data= {this.state.dataSource}
         renderItem= {item=> this.renderItem(item)}
         keyExtractor= {item=>item.id.toString()} />
      </View>
   </View>
 </ScrollView>
  );
  }
    }
export default CatalogPlant;


