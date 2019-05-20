import { StyleSheet } from "react-native"

export default StyleSheet.create({
        containerxd: {
          flex: 4,
          backgroundColor: "#02A373",
          justifyContent: "space-between"
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
          backgroundColor: "#fff"
         },
        button: {
          marginTop: 15,
          paddingHorizontal: 50,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: "#ffffff"
        },
        ImageIconStyle: {
            padding: 10,
            margin: 5,
            height: 25,
            width: 25,
            justifyContent: 'flex-start',
            resizeMode: 'stretch',
        },
        textStyle: {
            flex: 1,
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginTop: 5,
            
        }
})