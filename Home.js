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
    ScrollView,
    Button
} from 'react-native';
import styles from "./styles";



class Home extends React.Component {
     


     

render(){
     return(
      <ScrollView style={styles.containerxd}>
      <TouchableOpacity style={styles.textStyle}>
         <Image
            source={require('./images/burger.png')}
            style={styles.ImageIconStyle} />
     </TouchableOpacity>
     <View style={styles.button}>
            <Button title="Add a new plant HEHE" color="#009C73" justifyContent="space-between"
            accessibilityLabel="Learn more about this purple button"></Button>
            <Text></Text>
            <Button title="Watering schedule" color="#009C73" justifyContent="space-between"
            accessibilityLabel="Learn more about this purple button"></Button>
            <Text></Text>
            <Button title="Plants catalog" color="#009C73" onPress={() => this.props.navigation.navigate('Catalog')} justifyContent="space-between" 
            accessibilityLabel="Learn more about this purple button"/>
      </View>
    
    </ScrollView>
     );}


}

export default Home;



/* 

<Button
                    title="Go to catalog"
                    onPress={() => this.props.navigation.navigate('Catalog')}
                />

*/