import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ListView
} from 'react-native';
import styles from "./styles";
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
import {Container, Content, ListItem} from 'native-base';
import { withNavigation } from 'react-navigation';



// lista kwiatków
var data = []
var currentUser

class Home extends React.Component {
    

    
    constructor(props){
       super(props)
    
        this.ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !==r2})

        this.state = {
            listViewData : data
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
      
          if (user != null) {
            var that = this
            
             firebase.database().ref(user.uid).child('plantList').on('child_added',function(data){
      
                var newData = [...that.state.listViewData]
                newData.push(data)
      
                that.setState({ listViewData: newData})
            })
          }
        })
      }

render(){

    
     return(
 
      <ScrollView style={styles.containerxd}> 
      <TouchableOpacity style={styles.textStyle} onPress={() => this.props.navigation.navigate('Burger')}>
         <Image
            source={require('./images/burger.png')}
            style={styles.imageIconStyle} 
            />
     </TouchableOpacity>
     <View style={styles.white}>
         
            <Button title="Add a new plant" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginBottom:3}} 
                onPress={() => this.props.navigation.navigate('NewPlant')}/>
            <Text></Text>
            <Button title="Watering schedule" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginTop:3, marginBottom:3}} 
                onPress={() => this.props.navigation.navigate('Watering')}
                />
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


            <Container>
                <Content>
                    <ListView
                        enableEmptySections
                        dataSource = {this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('FavPlant',{keyPlant: data.key})}>

                                <View style={styles.tabHeader}><Text style={styles.textContent}> {data.val().namePlant}</Text></View>
                                <View style={styles.tabHeader}><Text style={styles.textContent}> {data.val().nameC}</Text></View>
                                <View style={styles.tabHeader}><Text style={styles.textContent}> {data.key}</Text></View>

                                <View style={styles.space}/>
                            </TouchableOpacity>
                        }
                    />
                </Content>
            </Container>
            
            <View style={styles.space}/>
            
            
            

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