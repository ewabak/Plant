import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ListView,
    FlatList,
    StatusBar,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import styles from "./styles";
import * as firebase from 'firebase';
import {Container, Content, ListItem} from 'native-base';
import { ImagePicker, Camera, Permissions, Constants } from 'expo';
import { Button } from 'react-native-elements';
import uuid from 'uuid';


var snapshot = []
var currentUser;
var storageRef = firebase.storage().ref("images");




class FavPlant extends React.Component {
  state = {
    image: null,
    uploading: false,
  };

 
    async componentDidMount(){
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      await Permissions.askAsync(Permissions.CAMERA);
    }

    constructor(props){
        super(props)
     
         this.ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !==r2})
 
         this.state = {
             listViewData : snapshot
         }
     }

     componentDidMount(){
       
      const { navigation } = this.props;
      const keyPlant = navigation.getParam('keyPlant');

      firebase.auth().onAuthStateChanged((user) => {
      
        if (user != null) {
          var that = this

          firebase.database().ref(user.uid).child('plantList').child(keyPlant).on('value', function(snapshot){

            console.log(snapshot.val().namePlant);
            const nameC = snapshot.val().nameC;

      
            var newData = [...that.state.listViewData]
            newData.push(snapshot)
  
            that.setState({ listViewData: newData})

        });
      }
    })
     }


     _maybeRenderUploadingOverlay = () => {
      if (this.state.uploading) {
        return (
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: 'rgba(0,0,0,0.4)',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <ActivityIndicator color="#fff" animating size="large" />
          </View>
        );
      }
    };
  
    _maybeRenderImage = () => {
      let { image } = this.state;
      if (!image) {
        return;
      }
  
      return (
        <View
          style={{
            marginTop: 30,
            width: 250,
            borderRadius: 3,
            elevation: 2,
          }}>
          <View
            style={{
              borderTopRightRadius: 3,
              borderTopLeftRadius: 3,
              shadowColor: 'rgba(0,0,0,1)',
              shadowOpacity: 0.2,
              shadowOffset: { width: 4, height: 4 },
              shadowRadius: 5,
              overflow: 'hidden',
            }}>
            <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
          </View>
  
          <Text
            onPress={this._copyToClipboard}
            onLongPress={this._share}
            style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
            {image}
          </Text>
        </View>
      );
    };

    _pickImage = async () => {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      this._handleImagePicked(pickerResult);
    };
  
    _handleImagePicked = async pickerResult => {
      try {
        this.setState({ uploading: true });
  
        if (!pickerResult.cancelled) {
          uploadUrl = await uploadImageAsync(pickerResult.uri);
          this.setState({ image: uploadUrl });
        }
      } catch (e) {
        console.log(e);
        alert('Upload failed, sorry :(');
      } finally {
        this.setState({ uploading: false });
      }
    };

render(){
  let { image } = this.state;
  
     return(

      <ScrollView style={styles.containerxd}>

        <TouchableOpacity style={styles.textStyle} onPress={() => this.props.navigation.navigate('Burger')}>
          <Image
            source={require('./images/burger.png')}
            style={styles.ImageIconStyle} />
        </TouchableOpacity>

      

     <View style={styles.white}>
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Container>
        <Content>
          
              <Button
              title="Pick an image from camera roll"
              type="solid" 
              buttonStyle = {{backgroundColor:'#009C73'}}
              onPress={this._pickImage}
              />
              <View style={styles.space}/>
              <Button
              title="Take a picture"
              type="solid" 
              buttonStyle = {{backgroundColor:'#009C73'}}
              onPress={this._takeImage}
              />
              {/* {image &&
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
              <View style={styles.space}/>

              {this._maybeRenderImage()}
              {this._maybeRenderUploadingOverlay()}

        <StatusBar barStyle="default" />

            
           <Button title="Add plant to watering schedule" type="solid" 
          buttonStyle = {{backgroundColor:'#009C73'}} 
          onPress={() => this.props.navigation.navigate('Watering',{nameC: nameC })}
          />
          
          
            

          <ListView
            enableEmptySections
            dataSource = {this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={snapshot =>
           <View>
             
                      <View style={styles.space}/>

            <View style={styles.tabHeader}><Text style={styles.textHeader}>Scientific name</Text></View>
            <View style={styles.tabContent}><Text style={styles.textContent}>{snapshot.val().namePlant}</Text></View>
            
            <View style={styles.tabHeader}><Text style={styles.textHeader}>Common name</Text></View>
            <View style={styles.tabContent}><Text style={styles.textContent}>{snapshot.val().nameC}</Text></View>

            <View style={styles.tabHeader}><Text style={styles.textHeader}>Moisture use</Text></View>
            <View style={styles.tabContent}><Text style={styles.textContent}>{snapshot.val().moisture}</Text></View>

            <View style={styles.tabHeader}><Text style={styles.textHeader}>Drought tolerance</Text></View>
            <View style={styles.tabContent}><Text style={styles.textContent}>{snapshot.val().drought}</Text></View>

            <View style={styles.tabHeader}><Text style={styles.textHeader}>Flower color</Text></View>
            <View style={styles.tabContent}><Text style={styles.textContent}>{snapshot.val().fcolor}</Text></View>
            
            <View style={styles.tabHeader}><Text style={styles.textHeader}>Life span</Text></View>
            <View style={styles.tabContent}><Text style={styles.textContent}>{snapshot.val().lifespan}</Text></View>

            <View style={styles.tabHeader}><Text style={styles.textHeader}>Bloom period</Text></View>
            <View style={styles.tabContent}><Text style={styles.textContent}>{snapshot.val().bloom}</Text></View>

            <View style={styles.tabHeader}><Text style={styles.textHeader}>Growth period</Text></View>
            <View style={styles.tabContent}><Text style={styles.textContent}>{snapshot.val().gperiod}</Text></View>

            <View style={styles.tabHeader}><Text style={styles.textHeader}>Mature height</Text></View>
            <View style={styles.tabContent}><Text style={styles.textContent}>{snapshot.val().mheight} cm</Text></View>

            <View style={styles.tabHeader}><Text style={styles.textHeader}>Toxicity</Text></View>
            <View style={styles.tabContent}><Text style={styles.textContent}>{snapshot.val().toxicity}</Text></View>
            </View>
               }
             />
           </Content>
          </Container>

          <View style={styles.space}/>
      </View>
      </View>
      </ScrollView>
     );
    }
  }
  export default FavPlant;


async function uploadImageAsync(uri) {
  
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child(uuid.v4());
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}


