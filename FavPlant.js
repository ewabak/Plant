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
    ListView
} from 'react-native';
import styles from "./styles";
import { withNavigation } from 'react-navigation';
import * as firebase from 'firebase';
import {Container, Content, ListItem} from 'native-base';


var data = []

var currentUser;

class FavPlant extends React.Component {

    constructor(props){
        super(props)
     
         this.ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !==r2})
 
         this.state = {
             listViewData : data
         }
     }

     componentDidMount(){
      const { navigation } = this.props;
      const keyPlant = navigation.getParam('keyPlant');

        firebase.database().ref('keyPlant').child('plantList').on('child_added',function(data){
      
            var newData = [...that.state.listViewData]
            newData.push(data)
  
            that.setState({ listViewData: newData})
        })
     }


    //update plant name at the unique key
    


render(){
 //console.log(this.state.data.dataSource);
  
     return(
      <ScrollView style={styles.containerxd}>
        <TouchableOpacity style={styles.textStyle}>
          <Image
            source={require('./images/burger.png')}
            style={styles.ImageIconStyle} />
        </TouchableOpacity>

     <View style={styles.white}>
     <Container>
                <Content>
                    <ListView
                        enableEmptySections
                        dataSource = {this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>
<View>
          <Image source={data.val().pcURL} style={styles.cardImage} />
        
          <View style={styles.tabHeader}><Text style={styles.textHeader}>Scientific name</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{data.val().namePlant}</Text></View>
          
          <View style={styles.tabHeader}><Text style={styles.textHeader}>Common name</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{data.val().nameC}</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Moisture use</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{data.val().moisture}</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Drought tolerance</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{data.val().drought}</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Flower color</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{data.val().fcolor}</Text></View>
          
          <View style={styles.tabHeader}><Text style={styles.textHeader}>Life span</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{data.val().lifespan}</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Bloom period</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{data.val().bloom}</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Growth period</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{data.val().gperiod}</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Mature height</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{data.val().mheight} cm</Text></View>

          <View style={styles.tabHeader}><Text style={styles.textHeader}>Toxicity</Text></View>
          <View style={styles.tabContent}><Text style={styles.textContent}>{data.val().toxicity}</Text></View>
          </View>   
        }/>
                </Content>
            </Container>

          <View style={styles.space}/>

      </View>
    </ScrollView>
     );}
     } 
     
export default FavPlant;



