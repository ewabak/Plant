import { StyleSheet } from "react-native"


var styles = StyleSheet.create({
        containerxd: {
          flex: 4,
          backgroundColor: "#02A373",
         },
         container: {
          flex: 4,
          justifyContent: 'space-around',
          backgroundColor: "#fff"
         },
        loader:{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
         },
        list:{
          paddingVertical: 4,
          margin: 5,
          backgroundColor: "#fff",
         },
        button: {
          marginTop: 15,
          paddingHorizontal: 50,
          paddingTop: 50,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: "#ffffff"
        },
        ImageIconStyle: {
            height: 25,
            width: 25,
            justifyContent: 'flex-start',
            resizeMode: 'stretch',
        },
        textStyle: {
            flexDirection: 'row',
            alignSelf: 'flex-end',
            paddingRight: 20,
            paddingTop: 40,
            paddingBottom: 25,
            marginTop: 5,
            
        }
})

module.exports = styles;