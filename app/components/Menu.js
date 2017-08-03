import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

//
// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
//
// export default class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       // Try setting `flexDirection` to `column`.
//       <View style={{flex: 1, flexDirection: 'row'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes SUP TK reload.</Text>
        <Text>Shake your phone to open tasdasdasdhe developer menu.</Text>
      </View>
    );
  }
}

export default Menu;
