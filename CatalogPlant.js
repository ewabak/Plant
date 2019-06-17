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
import { Button, ListItem, colors } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import * as firebase from 'firebase';

var currentUser
class CatalogPlant extends React.Component {

  addToFavourites = async(scname, coname, obrazek,moisture,drought,fcolor,lifespan,bloom,gperiod,mheight,toxicity) =>{

    //get current user
    currentUser = await firebase.auth().currentUser

    //get unique key
    var databaseRef = await firebase.database().ref(currentUser.uid).child('plantList').push()

    //update plant name at the unique key
    databaseRef.set({
      'namePlant': scname,
      'nameC': coname,
      'pcURL': obrazek,
      'moisture': moisture,
      'drought': drought,
      'fcolor': fcolor,
      'lifespan': lifespan,
      'bloom':bloom,
      'gperiod': gperiod,
      'mheight': mheight,
      'toxicity': toxicity,

    })


  }


  constructor(props){
    super(props);
 }
 state = {
  data: ''
}

  componentDidMount(){
  const { navigation } = this.props;
  const linkPlant = navigation.getParam('linkPlant');

    fetch(linkPlant + '?token=Ymgra1d5M1dCaUlmMWgyME9qNVhTdz09&fbclid=IwAR3FY03yEVzS77Ca1Q9TIbMdMlJhXtpOjhcqcD-MJHAYJXCNcdA3UrJ2p9Q')
    .then(response => response.json())
   .then((responseJson)=> {
     this.setState({
      data: responseJson
     })
   })
   .catch(error=>console.log(error)) 
   }


render(){
  // console.log(this.state.data.dataSource);
  const { data } = this.state;
  const obrazek = data && data.main_species && data.main_species.images && data.main_species.images[0] && data.main_species.images[0].url || '';
  const scname = data && data.scientific_name || '';
  const coname = data && data.common_name || '';
  const moisture = data && data.main_species && data.main_species.growth && data.main_species.growth.moisture_use || '';
  const drought = data && data.main_species && data.main_species.growth && data.main_species.growth.drought_tolerance || '';
  const fcolor = data && data.main_species && data.main_species.flower && data.main_species.flower.color || '';
  const lifespan = data && data.main_species && data.main_species.specifications && data.main_species.specifications.lifespan || '';
  const bloom = data && data.main_species && data.main_species.seed && data.main_species.seed.bloom_period || '';
  const gperiod = data && data.main_species && data.main_species.specifications && data.main_species.specifications.growth_period || '';
  const mheight = data && data.main_species && data.main_species.specifications && data.main_species.specifications.mature_height && data.main_species.specifications.mature_height.cm || '';
  const toxicity = data && data.main_species && data.main_species.specifications && data.main_species.specifications.toxicity || '';
  let image = {uri: obrazek}; 

     return(
      <ScrollView style={styles.containerxd}>
        <TouchableOpacity style={styles.textStyle} onPress={() => this.props.navigation.navigate('Burger')}>
          <Image
            source={require('./images/burger.png')}
            style={styles.ImageIconStyle} />
        </TouchableOpacity>

     <View style={styles.white}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}> 

          <Image source={image} style={styles.cardImage} />
          <Text></Text>
          <Button title="Add to your list" type="solid" 
          buttonStyle = {{backgroundColor:'#009C73'}} 
          onPress={() => this.addToFavourites(scname, coname, obrazek,moisture,drought,fcolor,lifespan,bloom,gperiod,mheight,toxicity)}
          onPress={() => this.props.navigation.navigate('Home')}
          />
          <Text></Text>
          <View style={styles.tabHeader}><Text style={styles.textHeader}>Scientific name</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{scname}</Text></View>
          
          <View style={styles.tabHeader}><Text style={styles.textHeader}>Common name</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{coname}</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Moisture use</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{moisture}</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Drought tolerance</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{drought}</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Flower color</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{fcolor}</Text></View>
          
          <View style={styles.tabHeader}><Text style={styles.textHeader}>Life span</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{lifespan}</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Bloom period</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{bloom}</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Growth period</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{gperiod}</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Mature height</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{mheight} cm</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Toxicity</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{toxicity}</Text></View>



          <View style={styles.space}/>

      
        </View>
      </View>
    </ScrollView>
     );}

}

export default CatalogPlant;
