import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ActivityIndicator,
    Text,
    View,
    Button,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView
} from 'react-native';
import styles from "./styles";
import { Input, Card } from 'react-native-elements';



class Home extends React.Component {
  
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
     </TouchableOpacity>
     
     render(){
      if(this.state.loading){
       return( 
         <View style={styles.loader}> 
         <ActivityIndicator size="large" color="#0c9"/>
         </View>
     )}

     return(
      <ScrollView style={styles.containerxd}>
      <TouchableOpacity style={styles.textStyle}>
         <Image
            source={require('./images/burger.png')}
            style={styles.ImageIconStyle} />
     </TouchableOpacity>
     <View style={styles.button}>
     <Input placeholder='Enter plant name'/>

      
     <View style={styles.container}> 
      <FlatList
         data= {this.state.dataSource}
         ItemSeparatorComponent = {this.FlatListItemSeparator}
         renderItem= {item=> this.renderItem(item)}
         keyExtractor= {item=>item.id.toString()} />
      </View>
      </View>
    </ScrollView>
     );}


}

export default Home;


/*
import React, { Component } from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
    Button,
   
 
    
    
} from 'react-native';
import styles from "./styles";
import { FormInput, Card } from 'react-native-elements';
//import { Card} from 'native-base';


class Catalog extends React.Component {

  
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
       .catch(error=>console.log(error)) 
       }
       
       
       renderItem=(data)=>(

      
        <TouchableOpacity style={styles.list}>
        <Text style={styles.lightText}>{data.item.scientific_name}</Text>
        <Text style={styles.lightText}>{data.item.common_name}</Text>
   </TouchableOpacity>
       );
       
       render(){
        if(this.state.loading){
         return( 
           <View style={styles.loader}> 
           <ActivityIndicator size="large" color="#0c9"/>
           </View>
       )}
  
       return(
        <ScrollView style={styles.containerxd}>
        <TouchableOpacity style={styles.textStyle}>
           <Image
              source={require('./images/burger.png')}
              style={styles.ImageIconStyle} />
       </TouchableOpacity>
       <View>
       <View style={styles.button}>
      
       <FormInput placeholder='Enter plant name'/>

       <FlatList
    data= {this.state.dataSource}
    ItemSeparatorComponent = {this.FlatListItemSeparator}
    renderItem= {item=> this.renderItem(item)}
    keyExtractor= {item=>item.id.toString()}
 />

        </View>
       <View style={styles.container}> 
       
        </View>
        </View>
      </ScrollView>
       );}
  
  

}



export default Catalog;

*/