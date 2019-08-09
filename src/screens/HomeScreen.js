import React from 'react';
import { Button, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../resources/logoTransparet.png')}
          style={styles.imageStyle}
        />
      );
    }
  }

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <LogoTitle />,
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                    <Image
                        source={require('../resources/info.jpg')}
                        style={styles.infoStyle}
                    />
                </TouchableOpacity>
              
            ),
        };
    };
    
    render() {
      return (            
            <View style={styles.viewContainerStyles}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('Info');
                }}
            />
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
    imageStyle: {
        width: 140,
        height: 35, 
        bottom: 5
    },
    infoStyle: {
        width: 30,
        height: 30,
        margin: 4,
        marginRight: 10
    }

});

export default HomeScreen;