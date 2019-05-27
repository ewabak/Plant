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
    Keyboard
} from 'react-native';
import { Input, Card, Button } from 'react-native-elements';
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
            </Item>
        )
    }
}

export default Searcher;