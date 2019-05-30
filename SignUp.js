import React, { Component } from 'react';
import { StyleSheet, Text, View,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView
} from 'react-native';
import styles from "./styles";
import { Input, Card, Button } from 'react-native-elements';

export class SignUp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {

        }
    }
     render(){
         
     return(
         
      <ScrollView style={styles.containerxd}>
          <View style={styles.textStyle}></View>
            <View style={styles.white}>
            <Input placeholder='Email address'/>
            <View style={styles.space}/>
            <Input placeholder='Password'/>
            <View style={styles.space}/>
            <Input placeholder='Confirm password'/>
            <View style={styles.space}/>
        <Button title="Register"   type="outline" buttonStyle = {{width:100, borderColor:'#009C73', justifyContent: 'center', alignItems: 'center'}} titleStyle={{color:'#00000'}}/>
            <View style={styles.space}/></View>
    </ScrollView>
     );}

}

export default SignUp;

/*if(this.state.loading){
       return( 
         <View style={styles.loader}> 
         <ActivityIndicator size="large" color="#0c9"/>
         </View>
     )}

     */