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
} from 'react-native';
import styles from "./styles";
import { Button } from 'react-native-elements';



class Home extends React.Component {
     


     

render(){
     return(
      <ScrollView style={styles.containerxd}>
      <TouchableOpacity style={styles.textStyle}>
         <Image
            source={require('./images/burger.png')}
            style={styles.ImageIconStyle} />
     </TouchableOpacity>
     <View style={styles.white}>
            <Button title="Add a new plant" type="solid" buttonStyle = {{backgroundColor:'#009C73'}} />
            <Text></Text>
            <Button title="Watering schedule" type="solid" buttonStyle = {{backgroundColor:'#009C73'}} />
            <Text></Text>
            <Button title="Plants catalog" type="solid" buttonStyle = {{backgroundColor:'#009C73'}} onPress={() => this.props.navigation.navigate('Catalog')} />
      
            <View style={styles.space}/>

      </View>

    </ScrollView>
     );}

//<Button title="Search"   type="outline" buttonStyle = {{width:100, borderColor:'#009C73'}} titleStyle={{color:"#00000"}}/>

}

export default Home;



/* 

<Button
                    title="Go to catalog"
                    onPress={() => this.props.navigation.navigate('Catalog')}
                />

*/