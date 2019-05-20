import React from "react";
import styles from "./styles";
import { Button } from 'react-native';

import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Image,
Text,
TouchableOpacity
} from "react-native";

export default class Source extends React.Component {
static navigationOptions = ({ navigation }) => {
return {
  title: "Source Listing",
  headerStyle: {backgroundColor: "#fff"},
  headerTitleStyle: {textAlign: "center",flex: 1}
 };
};

constructor(props) {
 super(props);
 this.state = {
   loading: true,
   dataSource:[]
  };
}

componentDidMount(){
fetch("https://trefle.io//api/plants?token=Ymgra1d5M1dCaUlmMWgyME9qNVhTdz09&fbclid=IwAR3FY03yEVzS77Ca1Q9TIbMdMlJhXtpOjhcqcD-MJHAYJXCNcdA3UrJ2p9Q")
.then(response => response.json())
.then((responseJson)=> {
  this.setState({
   loading: false,
   dataSource: responseJson
  })
})
.catch(error=>console.log(error)) //to catch the errors if any
}

FlatListItemSeparator = () => {
return (
  <View style={{
     height: .5,
     width:"100%",
     backgroundColor:"rgba(0,0,0,0.5)",}} />
);
}

renderItem=(data)=>
<TouchableOpacity style={styles.list}>
<Text style={styles.lightText}>{data.item.scientific_name}</Text>
<Text style={styles.lightText}>{data.item.common_name}</Text>
</TouchableOpacity>

render(){
 if(this.state.loading){
  return( 
    <View style={styles.loader}> 
      <ActivityIndicator size="large" color="#0c9"/>
    </View>
)}

return(
<View style={styles.containerxd}>  

 <TouchableOpacity style={styles.textStyle}>
    <Text></Text>
    <Image
     source={require('./images/burger.png')}
     style={styles.ImageIconStyle} />
      <Text></Text>
</TouchableOpacity>
<View style={styles.button}>
       <Button title="Add a new plant HEHE" color="#009C73" justifyContent="space-between" onPress={this._onPressButton}
       accessibilityLabel="Learn more about this purple button"></Button>
       <Text></Text>
       <Button title="Watering schedule" color="#009C73" justifyContent="space-between" onPress={this._onPressButton}
       accessibilityLabel="Learn more about this purple button"></Button>
       <Text></Text>
       <Button title="Plants catalog" color="#009C73" justifyContent="space-between" onPress={this._onPressButton}
       accessibilityLabel="Learn more about this purple button"></Button></View>
<View style={styles.container}> 
 <FlatList
    data= {this.state.dataSource}
    ItemSeparatorComponent = {this.FlatListItemSeparator}
    renderItem= {item=> this.renderItem(item)}
    keyExtractor= {item=>item.id.toString()}
 /></View>
</View> 
)}
}