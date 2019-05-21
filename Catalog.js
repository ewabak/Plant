import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import styles from "./styles";


class Catalog extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>catalog</Text>
                <Button
                    title="Go to Home Activity"
                    onPress={() => this.props.navigation.navigate("Home")}
                />               

            </View>
        );
    }
}



export default Catalog;

