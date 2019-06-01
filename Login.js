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

export default class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            email: "",
            password: ""

        }
    }

    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { }, (error) => { Alert.alert(error.message); });
    }

    onCreateAccountPress = () => {
        this.props.navigation.navigate('SignUp');
    }

    onForgotPasswordPress = () => {
        this.props.navigation.navigate('ForgotPassword');
    }

    render() {
        return (
            <View style={{paddingTop:50, alignItems:"center"}}>

                <Text>Login</Text> 

                <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({email: text}) }}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <View style={{paddingTop:10}} />

                <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({password: text}) }}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <Button title="Login" onPress={this.onLoginPress} />
                <Button title="Create account..." onPress={this.onCreateAccountPress} />
                <Button title="Forgot password..." onPress={this.onForgotPasswordPress} />
            </View>
        );
    }
}


const styles = StyleSheet.create({

});