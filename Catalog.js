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

class Catalog extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        dataSource :[]
       };
     }
     
     componentDidMount(){
      fetch("https://trefle.io//api/plants?token=Ymgra1d5M1dCaUlmMWgyME9qNVhTdz09&fbclid=IwAR3FY03yEVzS77Ca1Q9TIbMdMlJhXtpOjhcqcD-MJHAYJXCNcdA3UrJ2p9Q")
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

     <Button title="Search a plant" type="solid" 
        buttonStyle = {{backgroundColor:'#009C73', height:50, marginBottom:3}} 
        onPress={() => this.props.navigation.navigate('Search')}/>

     <View style={styles.space}/>

     <View> 
      <FlatList
         data= {this.state.dataSource}
         renderItem= {item=> this.renderItem(item)}
         keyExtractor= {item=>item.id.toString()} />
      </View>
      </View>
    </ScrollView>
     );}

}

export default Catalog;


/*

renderItem = (data)=>{
  const {navigation} = this.props;
 return (
         <TouchableOpacity 
          style={styles.card} 
          onPress={() => {
            navigation.navigate('CatalogPlant', data.item.link)
          }}
         >
           <Image 
            style={styles.cardImage} 
            source={require('./images/flower.jpg')}
           />
           <Text 
            style={styles.cardText} 
           >
            {data.item.scientific_name}
           </Text> 
         </TouchableOpacity>
 )
 
 }
            <Image style={styles.cardImage} source={require('./images/lis.png')}/>

*/