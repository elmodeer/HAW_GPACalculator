import React from 'react';
import { Button, Image, View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

class HomeScreen extends React.Component { 
    render() {
      const {navigation} = this.props ;
      return (            
            <View style={styles.viewContainerStyles}>
                          
            </View>
      );
    }
}
const styles = StyleSheet.create({
    viewContainerStyles: {
        //ackgroundColor: '#a7b7d0',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        // borderWidth: 1,
        // margin: 2,
        // borderColor: 'black'
    },
    container: {
        backgroundColor: '#DCDCDC',
    },
    logoStyle: {
        width: 140,
        height: 35, 
        bottom: 5,
    },
    infoIconStyle: {
        width: 30,
        height: 30,
        margin: 4,
        marginRight: 10
    },
    buttonContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#00b5ec',
        borderRadius: 50,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',

    },
    buttonPdfContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#fd605c',
        borderRadius: 50,
        width:300,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',

    },
    pdfIcon:{
        width:30,
        height:30,
        marginLeft:15,
    },
    manualText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }

});

export default HomeScreen;