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
     <View style={styles.space}/>

      <Text>{nameC}</Text>

      </View>
    </ScrollView>
     );}


}

export default Watering;

