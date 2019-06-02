import React, { Component } from 'react';
import { StyleSheet, Text, View,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
    TextInput, 
    Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Input, Card, Button } from 'react-native-elements';
import * as firebase from 'firebase';

export default class ForgotPassword extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            email: ""
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
        <Button title="Register"   type="outline" buttonStyle = {{width:100, borderColor:'#009C73', justifyContent: 'center', alignItems: 'center'}} titleStyle={{color:'#000'}}/>
            <View style={styles.space}/></View>
    </ScrollView>
     );}

    onResetPasswordPress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert("Password reset email has been sent.");
            }, (error) => {
                Alert.alert(error.message);
            });
    }

    onBackToLoginPress = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <ScrollView style={styles.containerxd}> 
            <View style={styles.textStyle}/>
            <View style={styles.white}>

                <Text>Forgot Password</Text> 

                <TextInput style={{width: 200, height: 50, borderWidth: 1, marginBottom: 3}}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({email: text}) }}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <Button title="Reset Password" type="solid" 
                    buttonStyle = {{backgroundColor:'#009C73', height:50, marginBottom:3}} 
                    onPress={this.onResetPasswordPress} />
                <Button title="Back to Login" type="solid" 
                    buttonStyle = {{backgroundColor:'#009C73', height:50, marginTop:3, marginBottom:3}}
                    onPress={this.onBackToLoginPress} />
                <View style={styles.space}/>   
            </View>
            <Text></Text>               
            <View style={styles.space}/>   
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

});