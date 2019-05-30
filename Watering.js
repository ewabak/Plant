import React, { Component } from 'react';
import { StyleSheet, Text, View,
    TouchableOpacity,
    Image,
    ScrollView,
    Picker,
    AppState,
    AppRegistry
} from 'react-native';

import styles from "./styles";
import { Input, Card, Button } from 'react-native-elements';

export class Watering extends React.Component {

    constructor(props){
        super(props);

        this.handleAppStateChange = this.handleAppStateChange.bind(this);

        this.state = {
            seconds: 5,
        };
    }

    componentDidMount(){
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount(){
        AppState.removeEventListener('change', this.handleAppStateChange);

    }

    handleAppStateChange(AppState){
        if (AppState == 'background'){
            console.log('app is in background', this.state.seconds);
        }
    }
    
     render(){

     return(
         
    <ScrollView style={styles.containerxd}>

        <TouchableOpacity style={styles.textStyle}>
         <Image
            source={require('./images/burger.png')}
            style={styles.ImageIconStyle} />
        </TouchableOpacity>

            <View style={styles.white}> 
            <View style={styles.space}/>

            <Picker 
                style={{width: 100}}
                selectedValue={this.state.seconds}
                onValueChange={(seconds) => this.setState({ seconds })}
            >
                <Picker.Item label="5" value={5}/>
                <Picker.Item label="10" value={10}/>
                <Picker.Item label="15" value={15}/>

            </Picker>

            

            </View>
            
    </ScrollView>
     );}

}

export default Watering;


