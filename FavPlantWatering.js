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
    Alert,
    ScrollView
} from 'react-native';
import styles from "./styles";
import { Input, Card, Button, Badge } from 'react-native-elements';
import * as firebase from 'firebase';

var currentUser

class Watering extends React.Component {

  addToMonday = async(scientific,common) =>{

    //get current user
    currentUser = await firebase.auth().currentUser

    //get unique key
    var databaseRef = await firebase.database().ref(currentUser.uid).child('monday').push()

    //update plant name at the unique key
    databaseRef.set({
      'nameS': scientific,
      'nameC': common,
    })

    Alert.alert(
      'Alert',
      'Added to watering list!',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }
  addToTuesday = async(scientific,common) =>{

    //get current user
    currentUser = await firebase.auth().currentUser

    //get unique key
    var databaseRef = await firebase.database().ref(currentUser.uid).child('tuesday').push()

    //update plant name at the unique key
    databaseRef.set({
      'nameS': scientific,
      'nameC': common,
    })

    Alert.alert(
      'Alert',
      'Added to watering list!',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );

  }
  
  addToWednesday = async(scientific, common) =>{

    //get current user
    currentUser = await firebase.auth().currentUser

    //get unique key
    var databaseRef = await firebase.database().ref(currentUser.uid).child('wednesday').push()

    //update plant name at the unique key
    databaseRef.set({
      'nameS': scientific,
      'nameC': common,
    })

    Alert.alert(
      'Alert',
      'Added to watering list!',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  addToThursday = async(scientific, common) =>{

    //get current user
    currentUser = await firebase.auth().currentUser

    //get unique key
    var databaseRef = await firebase.database().ref(currentUser.uid).child('thursday').push()

    //update plant name at the unique key
    databaseRef.set({
      'nameS': scientific,
      'nameC': common,
    })

    Alert.alert(
      'Alert',
      'Added to watering list!',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  addToFriday = async(scientific, common) =>{

    //get current user
    currentUser = await firebase.auth().currentUser

    //get unique key
    var databaseRef = await firebase.database().ref(currentUser.uid).child('friday').push()

    //update plant name at the unique key
    databaseRef.set({
      'nameS': scientific,
      'nameC': common,
    })

    Alert.alert(
      'Alert',
      'Added to watering list!',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  addToSaturday = async(scientific, common) =>{

    //get current user
    currentUser = await firebase.auth().currentUser

    //get unique key
    var databaseRef = await firebase.database().ref(currentUser.uid).child('saturday').push()

    //update plant name at the unique key
    databaseRef.set({
      'nameS': scientific,
      'nameC': common,
    })

    Alert.alert(
      'Alert',
      'Added to watering list!',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  addToSunday = async(scientific, common) =>{

    //get current user
    currentUser = await firebase.auth().currentUser

    //get unique key
    var databaseRef = await firebase.database().ref(currentUser.uid).child('sunday').push()

    //update plant name at the unique key
    databaseRef.set({
      'nameS': scientific,
      'nameC': common,
    })

    Alert.alert(
      'Alert',
      'Added to watering list!',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

     render(){
         
    const { navigation } = this.props;
    const scientific = navigation.getParam('namePlant');
    const common = navigation.getParam('nameC');
    

     return(
      <ScrollView style={styles.containerxd}>
      <TouchableOpacity style={styles.textStyle} onPress={() => this.props.navigation.navigate('Burger')}>
         <Image
            source={require('./images/burger.png')}
            style={styles.ImageIconStyle} />
     </TouchableOpacity>

     <View style={styles.white}>                 
    <Button title="Monday" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginBottom:3}} 
                onPress={() => this.addToMonday(scientific, common)}/>
    <Text></Text>
    <Button title="Tuesday" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginBottom:3}}
                onPress={() => this.addToTuesday(scientific, common)} />
    <Text></Text>
    <Button title="Wednesday" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginBottom:3}}
                onPress={() => this.addToWednesday(scientific, common)} />
    <Text></Text>
    <Button title="Thursday" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginBottom:3}} 
                onPress={() => this.addToThursday(scientific, common)}/>
    <Text></Text>
    <Button title="Friday" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginBottom:3}} 
                onPress={() => this.addToFriday(scientific, common)}/>
    <Text></Text>
    <Button title="Saturday" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginBottom:3}} 
                onPress={() => this.addToSaturday(scientific, common)}/>
    <Text></Text>
    <Button title="Sunday" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginBottom:3}} 
                onPress={() => this.addToSunday(scientific, common)}/>
      </View>
    </ScrollView>
     );}


}

export default Watering;

