import React from "react";
import { Button } from 'react-native';


import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
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
     backgroundColor:"rgba(0,0,0,0.5)",
}}
/>
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
 <View style={styles.container}>
       <Button title="Learn More" color="#841584" 
       accessibilityLabel="Learn more about this purple button"></Button>
       <Button title="Learn More" color="#841584" 
       accessibilityLabel="Learn more about this purple button"></Button>
       <Button title="Learn More" color="#841584" 
       accessibilityLabel="Learn more about this purple button"></Button>
 <FlatList
    data= {this.state.dataSource}
    ItemSeparatorComponent = {this.FlatListItemSeparator}
    renderItem= {item=> this.renderItem(item)}
    keyExtractor= {item=>item.id.toString()}
 />

</View>
)}
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: "#fff"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
   }
});
//test