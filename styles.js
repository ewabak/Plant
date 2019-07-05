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
        white: {
          marginTop: 15,
          paddingHorizontal: 50,
          paddingTop: 50,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: "#ffffff",
          justifyContent: 'center'
        },
        tabHeader: {
          backgroundColor: '#F2F2F2',
          height: 30,
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        },
        textHeader:{
          fontSize:20,
          fontWeight:'bold'
        },
        tabContent: {
          backgroundColor: '#fff',
          height: 30,
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        },
        textContent:{
          fontSize:18
                },
        space: {
          height:50
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
            
        },
        card: {
            marginBottom: 30,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            elevation: 3,
            shadowOffset: {width:3, height:3},
            borderWidth: 1,
            borderColor: '#fff'
        },
        cardImage: {
          width: '100%',
          height: 200,
          resizeMode: 'cover',

        },
        cardText: {
          fontSize:20,
          textAlign: 'center',
        },
        buttonGreen: {
          color: "#009C73",
          justifyContent: "space-between",
          margin: 50
        },
        largeText: {
          fontSize: 44,
        },
        smallText: {
          fontSize: 18,
        },
        textStyleWeather: {
          textAlign: 'center',
          color: 'black',
        },
        textInput: { 
          borderWidth:1, 
          borderColor:"gray", 
          marginVertical: 20, 
          padding:10, 
          height:40, 
          alignSelf: "stretch", 
          fontSize: 18, },
        
          textWatering: {
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center'

        }
})

module.exports = styles;