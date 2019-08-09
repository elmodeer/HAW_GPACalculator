// import Libraries to make a component
import React from "react";
import { Image , View, Text } from "react-native";

// make a component
// why not const Header = ( props ) => {
const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image
          source={require('../../resources/onlyLogo.png')}
          style={{ width: 35, height: 35 }}
        />
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    height: 80,
    paddingTop: 30,
    // shadows not working ?? 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadious: 2,
    eleavtion: 1, 
    position: "relative"
  }
};
// make the component available to other parts
export { Header };
