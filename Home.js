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
var data = []
var currentUser

class Home extends React.Component {
    
    componentDidMount(){
    }     
    
    
    constructor(props){
       super(props)
    
        this.ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !==r2})

        this.state = {
            listViewData : data
        }
    }
    componentDidMount(){

        this.getPlants()
    }

    getPlants = async()=>{

        currentUser = await firebase.auth().currentUser

        var that = this

        firebase.database().ref(currentUser.uid).child('plantList').on('child_added',function(data){

            var newData = [...that.state.listViewData]
            newData.push(data)

            that.setState({ listViewData: newData})
        })
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
         
            <Button title="Add a new plant" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginBottom:3}} 
                onPress={() => this.props.navigation.navigate('NewPlant')}/>
            <Text></Text>
            <Button title="Watering schedule" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginTop:3, marginBottom:3}} 
                onPress={() => this.props.navigation.navigate('Watering')}/>
            <Text></Text>
            <Button title="Plants catalog" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginTop:3, marginBottom:3}} 
                onPress={() => this.props.navigation.navigate('Catalog')} />
            <Text></Text>
            
            <Button title="testuje sobie login" type="solid" buttonStyle = {{backgroundColor:'#009C73'}} onPress={() => this.props.navigation.navigate('Login')} />
            <Text></Text>
            <Button title="testuje sobie signup" type="solid" buttonStyle = {{backgroundColor:'#009C73'}} onPress={() => this.props.navigation.navigate('SignUp')} />
            <Text></Text>
            <Button title="testuje sobie fpswd" type="solid" buttonStyle = {{backgroundColor:'#009C73'}} onPress={() => this.props.navigation.navigate('ForgotPassword')} />
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Container style={{ flex: 1, backgroundColor: 'yellow'}}>
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
            </Container>
            
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