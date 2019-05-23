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
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class CatalogPlant extends React.Component {


render(){

  const { navigation } = this.props;
  const linkPlant = navigation.getParam('linkPlant');

     return(
      <ScrollView style={styles.containerxd}>
      
     <View style={styles.white}>
            <Button title="Add a new plant" type="solid" buttonStyle = {{backgroundColor:'#009C73'}} />
          
            <Text>{JSON.stringify(linkPlant)}</Text>

      </View>

    </ScrollView>
     );}


}

export default CatalogPlant;



