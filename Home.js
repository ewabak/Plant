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
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
import {Container, Content, ListItem} from 'native-base';

// lista kwiatków
// var data = []
// var currentUser

class Home extends React.Component {

    componentDidMount(){

        firebase.auth().signInWithEmailAndPassword("gabriela.lenard0@gmail.com","password")
    }     


    // constructor(props){
    //     super(props)
    
    //     this.ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !==r2})

    //     this.state = {
    //         listViewData : data
    //     }
    // }
    // componentDidMount(){

    //     this.getPlants()
    // }

    // getPlants = async()=>{

    //     currentUser = await firebase.auth().currentUser

    //     var that = this

    //     firebase.database().ref(currentUser.uid).child('namePlant').on('child_added',function(data){

    //         var newData = [...that.state.listViewData]
    //         newData.push(data)

    //         that.setState({ listViewData: newData})
    //     })
    // }
render(){
     return(
      <ScrollView style={styles.containerxd}>
      <TouchableOpacity style={styles.textStyle}>
         <Image
            source={require('./images/burger.png')}
            style={styles.ImageIconStyle} />
     </TouchableOpacity>
     <View style={styles.white}>
            <Button title="Add a new plant" type="solid" buttonStyle = {{backgroundColor:'#009C73'}} onPress={() => this.props.navigation.navigate('NewPlant')}/>
            <Text></Text>
            <Button title="Watering schedule" type="solid" buttonStyle = {{backgroundColor:'#009C73'}} />
            <Text></Text>
            <Button title="Plants catalog" type="solid" buttonStyle = {{backgroundColor:'#009C73'}} onPress={() => this.props.navigation.navigate('Catalog')} />

            <Text></Text>
            <Text></Text>
            <Text></Text>
            {/* <Container>
                <Content>
                    <ListView
                        enableEmptySections
                        dataSource = {this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>

                            <ListItem>
                                <Text> {data.val().namePlant}</Text>
                            </ListItem>
                        }
                    />
                </Content>
            </Container> */}
            
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