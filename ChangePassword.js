import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button, Linking, Alert, } from 'react-native';
import styles from "./styles";
import * as firebase from 'firebase';

export default class ChangePassword extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: "",
    };
  }

  // Reauthenticates the current user and returns a promise...
  reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  }

  // Changes user's password...
  onChangePasswordPress = () => {
    this.reauthenticate(this.state.currentPassword).then(() => {
      var user = firebase.auth().currentUser;
      user.updatePassword(this.state.newPassword).then(() => {
        Alert.alert("Password was changed");
      }).catch((error) => { console.log(error.message); });
    }).catch((error) => { console.log(error.message) });
  }
  
  render() {
    return (
      <View style={styles.containerxd}>
        <View style={styles.textStyle}/>
        <View style={styles.white}>

        <TextInput style={styles.textInput} 
          value={this.state.currentPassword}
          placeholder="Current Password" 
          autoCapitalize="none" 
          secureTextEntry={true}
          onChangeText={(text) => { this.setState({currentPassword: text}) }}
        />

        <TextInput style={styles.textInput} 
          value={this.state.newPassword}
          placeholder="New Password" 
          autoCapitalize="none" secureTextEntry={true}
          onChangeText={(text) => { this.setState({newPassword: text}) }}
        />

        <Button title="Change Password" type="solid" 
            buttonStyle = {{backgroundColor:'#009C73', height:50, marginTop:3, marginBottom:3}}
            onPress={this.onChangePasswordPress}   />

        
        <View style={styles.space}/>
        <View style={styles.white}/>
        <View style={styles.white}/>
        <View style={styles.white}/>
        <View style={styles.space}/>
        </View>
      </View>
      
    );
  }
}

// const styles = StyleSheet.create({
//     text: { color: "white", fontWeight: "bold", textAlign: "center", fontSize: 20, },
//     textInput: { borderWidth:1, borderColor:"gray", marginVertical: 20, padding:10, height:40, alignSelf: "stretch", fontSize: 18, },
//   });