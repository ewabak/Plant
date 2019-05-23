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
    ScrollView
} from 'react-native';
import styles from "./styles";
import { Input, Card, Button } from 'react-native-elements';

class NewPlant extends React.Component {

     
     render(){
      

     return(
      <ScrollView style={styles.containerxd}>
      <TouchableOpacity style={styles.textStyle}>
         <Image
            source={require('./images/burger.png')}
            style={styles.ImageIconStyle} />
     </TouchableOpacity>
     <View style={styles.white}>
     <Input placeholder='Enter plant name'/>
     <View style={styles.space}/>
     
<Button title="Search"   type="outline" buttonStyle = {{width:100, borderColor:'#009C73', justifyContent: 'center', alignItems: 'center'}} titleStyle={{color:'#00000'}}/>
<View style={styles.space}/>

      </View>
    </ScrollView>
     );}


}

export default NewPlant;


/*if(this.state.loading){
       return( 
         <View style={styles.loader}> 
         <ActivityIndicator size="large" color="#0c9"/>
         </View>
     )}

     */