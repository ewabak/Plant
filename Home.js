import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
    ListView
} from 'react-native';
import styles from "./styles";
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
import {Container, Content, ListItem} from 'native-base';
import SearchInput from './SearchInput';
import { Location, Permissions } from 'expo';


// lista kwiatków
var data = []
var currentUser

export const fetchOpenWeatherCity = async city => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=063b3406208219cbfa80352760f2a4ba&units=metric`,
    );
    
    const { main, weather, name } = await response.json();
  
    return {
      location: name,
      weather: weather[0].main,
      temperature: main.temp,
    };
  };
  
  export const fetchOpenWeatherGPS = async coords => {
    // console.log(coords);
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=063b3406208219cbfa80352760f2a4ba&units=metric`,
    );
    const { main, weather, name } = await response.json();
  
    return {
      location: name,
      weather: weather[0].main,
      temperature: main.temp,
    };
  };

class Home extends React.Component {
    
    constructor(props){
       super(props)
    
        this.ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !==r2})

        this.state = {
            listViewData : data,
            loading: false,
            error: false,
            location: '',
            temperature: 0,
            weather: '',
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
          
        }), this.handleGetLocation();
      }
      
onLackOfLoginAdd = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user != null) {
            this.props.navigation.navigate('NewPlant');
        } else {
            this.props.navigation.navigate('Login');
        }
      });
}

onLackOfLoginWatering = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user != null) {
            this.props.navigation.navigate('Watering');
        } else {
            this.props.navigation.navigate('Login');
        }
      });
}

onLackOfLoginPlants = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user != null) {
            this.props.navigation.navigate('Catalog');
        } else {
            this.props.navigation.navigate('Login');
        }
      });
}

handleGetLocation = async () => {
    const {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({error: true});
    }
    const {coords} = await Location.getCurrentPositionAsync({});
    this.handleUpdateGPS(coords);
  }


  handleUpdateLocation = async city => {
    if (!city) return;

    this.setState({ loading: true }, async () => {
      try {
        const { location, weather, temperature } = await fetchOpenWeatherCity(city);
        
        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true,
        });
      }
    });
  };

  handleUpdateGPS = async coords => {
    if (!coords) return;
    this.setState({ loading: true }, async () => {
      try {
        const { location, weather, temperature } = await fetchOpenWeatherGPS(coords);
        
        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true,
        });
      }
    });
  }; 

      

render(){

    const { loading, error, location, weather, temperature } = this.state;

    
     return(
        
      <ScrollView style={styles.containerxd}> 
      <StatusBar backgroundColor="rgba(0,0,0,0)" barStyle="light-content" hidden = {false} translucent = {true} />
      <TouchableOpacity style={styles.textStyle} onPress={() => this.props.navigation.navigate('Burger')}>
         <Image
            source={require('./images/burger.png')}
            style={styles.imageIconStyle} 
            />
     </TouchableOpacity>
     
     <View style={styles.white}>
        {!loading && (
            <View>
            {error && (
                <Text style={[styles.smallText, styles.textStyleWeather]}>
                Could not load weather, please try a different city.
                </Text>
            )}

            {!error && (
                <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Weather')}>
                <Text style={[styles.largeText, styles.textStyleWeather]}>
                    {location}
                </Text>
                </TouchableOpacity>
                <Text style={[styles.smallText, styles.textStyleWeather]}>
                    {weather}
                </Text>
                <Text style={[styles.largeText, styles.textStyleWeather]}>
                    {`${Math.round(temperature)}°`}
                </Text>
                </View>
            )}

            <SearchInput
                placeholder="Search any city"
                onSubmit={this.handleUpdateLocation}
            />
            </View>
        )}
            <Text></Text>
            <Text></Text>
            <Button title="Add a new plant" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginBottom:3}} 
                onPress={this.onLackOfLoginAdd} />
            <Text></Text>
            <Button title="Watering schedule" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginTop:3, marginBottom:3}} 
                onPress={this.onLackOfLoginWatering} />
            <Text></Text>
            <Button title="Plants catalog" type="solid" 
                buttonStyle = {{backgroundColor:'#009C73', height:50, marginTop:3, marginBottom:3}} 
                onPress={this.onLackOfLoginPlants} />     
            <View style={styles.space}/>


            <Container style={{ flex: 1, backgroundColor: 'white'}}>
                <Content>
                    <ListView
                        enableEmptySections
                        dataSource = {this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('FavPlant',{keyPlant: data.key})}>

                                <View style={styles.tabHeader}><Text style={styles.textContent}> {data.val().namePlant}</Text></View>
                                <View style={styles.tabHeader}><Text style={styles.textContent}> {data.val().nameC}</Text></View>

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