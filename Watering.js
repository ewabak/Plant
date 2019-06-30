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
import { Input, Card, Button, Badge } from 'react-native-elements';

class Watering extends React.Component {

     render(){
         
    const { navigation } = this.props;
    const common = navigation.getParam('nameC');

     return(
      <ScrollView style={styles.containerxd}>
      <TouchableOpacity style={styles.textStyle} onPress={() => this.props.navigation.navigate('Burger')}>
         <Image
            source={require('./images/burger.png')}
            style={styles.ImageIconStyle} />
     </TouchableOpacity>

    <View style={styles.white}>                 
    <Button title="Monday" type="outline" buttonStyle = {{borderColor:'#009C73'}} titleStyle={{color:'#000'}}/>
    <Text></Text>
    <Button title="Tuesday" type="outline" buttonStyle = {{borderColor:'#009C73'}} titleStyle={{color:'#000'}}/>
    <Text></Text>
    <Button title="Wednesday" type="outline" buttonStyle = {{borderColor:'#009C73'}} titleStyle={{color:'#000'}}/>
    <Text></Text>
    <Button title="Thursday" type="outline" buttonStyle = {{borderColor:'#009C73'}} titleStyle={{color:'#000'}}/>
    <Text></Text>
    <Button title="Friday" type="outline" buttonStyle = {{borderColor:'#009C73'}} titleStyle={{color:'#000'}}/>
    <Text></Text>
    <Button title="Saturday" type="outline" buttonStyle = {{borderColor:'#009C73'}} titleStyle={{color:'#000'}}/>
    <Text></Text>
    <Button title="Sunday" type="outline" buttonStyle = {{borderColor:'#009C73'}} titleStyle={{color:'#000'}}/>
    <Text></Text>
    <View style={styles.space}/>
    <View style={styles.white}/>

      {/* <Text>{namePlant}</Text> */}

      <Text>{common}</Text>


      </View>
    </ScrollView>
     );}


}

export default Watering;

