import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ListView
} from 'react-native';
import styles from "./styles";
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';

export default class Settings extends React.Component {

    onDeleteAccount = () => {
        var user = firebase.auth().currentUser;

        user.delete().then(function() {
            this.props.navigation.navigate('Home');
          }, (error) => { Alert.alert(error.message); });
    }
    render(){
    
        return(
    
        <ScrollView style={styles.containerxd}> 
        <View style={styles.textStyle}/>
        <View style={styles.white}>
            
               <Button title="Change password" type="solid" 
                   buttonStyle = {{backgroundColor:'#009C73', height:50, marginBottom:3}} 
                   onPress={() => this.props.navigation.navigate('ChangePassword')}/>
               <Text></Text>
               <Button title="Delete account" type="solid" 
                   buttonStyle = {{backgroundColor:'#009C73', height:50, marginTop:3, marginBottom:3}} 
                   onPress={this.onDeleteAccount}
                   />
               <Text></Text>               
               <View style={styles.space}/>   
               <View style={styles.space}/>   
               <View style={styles.space}/>   
               <View style={styles.space}/>   
               <View style={styles.space}/>   
               <View style={styles.space}/>   
               <View style={styles.space}/>   
               <View style={styles.space}/>   


   
         </View>
   
       </ScrollView>
        );}
   }
