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
import { Input, Card, Button } from 'react-native-elements';
import styles from "./styles";

import { Item } from 'native-base';

class Searcher extends React.Component {
    render(){
        return (
            <Item>
                <Input
                    placeholder="Enter plant name"
                    onChangeText={this.props.onChangeText}
                    returnKeyType="search"
                    onSubmitEditing={this.props.plantSearch} />
                    <View style={styles.space}/>   
               <View style={styles.space}/>   
               <View style={styles.space}/>   
               <View style={styles.space}/>   
               <View style={styles.space}/>   
               <View style={styles.space}/>   
               <View style={styles.space}/>   
               <View style={styles.space}/>
            </Item>
        )
    }
}

export default Searcher;