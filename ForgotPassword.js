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
            <View style={{paddingTop:50, alignItems:"center"}}>

                <Text>Forgot Password</Text> 

                <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({email: text}) }}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <Button title="Reset Password" onPress={this.onResetPasswordPress} />
                <Button title="Back to Login" onPress={this.onBackToLoginPress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});