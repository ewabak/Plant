import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ActivityIndicator,
    Text,
    View,
    ListView,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView
} from 'react-native';
import styles from "./styles";
import { Input, Card, Button, Badge } from 'react-native-elements';
import * as firebase from 'firebase';


var snapshot = []
var currentUser;

class Watering extends React.Component {  

  constructor(props){
    super(props)
 
     this.ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !==r2})

     this.state = {
         listViewDataMonday : snapshot,
         listViewDataTuesday : snapshot,
         listViewDataWednesday : snapshot,
         listViewDataThursday : snapshot,
         listViewDataFriday : snapshot,
         listViewDataSaturday : snapshot,
         listViewDataSunday : snapshot,
         
     }
 }

 componentDidMount(){

  const { navigation } = this.props;
  const keyPlant = navigation.getParam('keyPlant');

  firebase.auth().onAuthStateChanged((user) => {

    if (user != null) {
      var that = this

    firebase.database().ref(user.uid).child('monday').on('child_added',function(data){

        var newData = [...that.state.listViewDataMonday]
        newData.push(data)

        that.setState({ listViewDataMonday: newData})

    });

    firebase.database().ref(user.uid).child('tuesday').on('child_added',function(data){

      var newData = [...that.state.listViewDataTuesday]
      newData.push(data)

      that.setState({ listViewDataTuesday: newData})

  });

  firebase.database().ref(user.uid).child('wednesday').on('child_added',function(data){

    var newData = [...that.state.listViewDataWednesday]
    newData.push(data)

    that.setState({ listViewDataWednesday: newData})

});


    firebase.database().ref(user.uid).child('thursday').on('child_added',function(data){

      var newData = [...that.state.listViewDataThursday]
      newData.push(data)

      that.setState({ listViewDataThursday: newData})

  });

  firebase.database().ref(user.uid).child('friday').on('child_added',function(data){

    var newData = [...that.state.listViewDataFriday]
    newData.push(data)

    that.setState({ listViewDataFriday: newData})

});

firebase.database().ref(user.uid).child('saturday').on('child_added',function(data){

  var newData = [...that.state.listViewDataSaturday]
  newData.push(data)

  that.setState({ listViewDataSaturday: newData})

});

firebase.database().ref(user.uid).child('sunday').on('child_added',function(data){

  var newData = [...that.state.listViewDataSunday]
  newData.push(data)

  that.setState({ listViewDataSunday: newData})

});
  }
})
 }


     render(){
    
     return(
      <ScrollView style={styles.containerxd}>
      <TouchableOpacity style={styles.textStyle} onPress={() => this.props.navigation.navigate('Burger')}>
         <Image
            source={require('./images/burger.png')}
            style={styles.ImageIconStyle} />
     </TouchableOpacity>

    <View style={styles.white}>

    
          <Text style={styles.textWatering}>Monday</Text> 
         <ListView
            enableEmptySections
            dataSource = {this.ds.cloneWithRows(this.state.listViewDataMonday)}
            renderRow={data =>
              <View>
                <Text>{data.val().nameS}</Text>
                <Text>{data.val().nameC}</Text>
                <Text></Text>
              </View>
            }/>
            <View style={styles.space}/>
            <Text style={styles.textWatering}>Tuesday</Text>
            <ListView
            enableEmptySections
            dataSource = {this.ds.cloneWithRows(this.state.listViewDataTuesday)}
            renderRow={data =>
              <View>
                <Text>{data.val().nameS}</Text>
                <Text>{data.val().nameC}</Text>
                <Text></Text> 

              </View>
            }/>
            <View style={styles.space}/>
            <Text style={styles.textWatering}>Wednesday</Text>
            <ListView
            enableEmptySections
            dataSource = {this.ds.cloneWithRows(this.state.listViewDataWednesday)}
            renderRow={data =>
              <View>
                <Text>{data.val().nameS}</Text>
                <Text>{data.val().nameC}</Text>
                <Text></Text> 

              </View>
            }/>  
            <View style={styles.space}/>
            <Text style={styles.textWatering}>Thursday</Text>
          <ListView
            enableEmptySections
            dataSource = {this.ds.cloneWithRows(this.state.listViewDataThursday)}
            renderRow={data =>
              <View>
                <Text>{data.val().nameS}</Text>
                <Text>{data.val().nameC}</Text>
                <Text></Text> 

              </View>
            }/>
            <View style={styles.space}/>
            <Text style={styles.textWatering}>Friday</Text>
            <ListView
            enableEmptySections
            dataSource = {this.ds.cloneWithRows(this.state.listViewDataFriday)}
            renderRow={data =>
              <View>
                <Text>{data.val().nameS}</Text>
                <Text>{data.val().nameC}</Text>
                <Text></Text> 

              </View>
            }/>
            <View style={styles.space}/>
            <Text style={styles.textWatering}>Saturday</Text>
            <ListView
            enableEmptySections
            dataSource = {this.ds.cloneWithRows(this.state.listViewDataSaturday)}
            renderRow={data =>
              <View>
                <Text>{data.val().nameS}</Text>
                <Text>{data.val().nameC}</Text>
                <Text></Text> 

              </View>
            }/>
            <View style={styles.space}/>
            <Text style={styles.textWatering}>Sunday</Text>
            <ListView
            enableEmptySections
            dataSource = {this.ds.cloneWithRows(this.state.listViewDataSunday)}
            renderRow={data =>
              <View>
                <Text>{data.val().nameS}</Text>
                <Text>{data.val().nameC}</Text>
                <Text></Text> 

              </View>
              
            }/>
                <View style={styles.space}/>

      </View>
    </ScrollView>
     );}


}

export default Watering;

