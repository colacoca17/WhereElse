import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
//
class ChatScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
      title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Text>Hello, Navigation!</Text>
        <Text>Hello, Navigation!</Text>
        <Text>Hello, Navigation!</Text>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'That cracka Down the Street' })}
          title="Chat with Lucy"
        />
        <Text>Hello, Navigation!</Text>
        <Text>Hello, Navigation!</Text>
      </View>
    );
  }
}



const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

var styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    backgroundColor: '#000000',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  overlay: {
    opacity: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    height: 200,
    width: 200,
    top: 50,
    bottom: 10,

  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 200,
    height: 200,
    alignItems: 'center',

  },
  backdrop: {
    flex:1,
    flexDirection: 'column'
  },
  headline: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  }
});

export default () => <SimpleApp />;

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);





// import React, { Component } from 'react';
// import { AppRegistry, Text } from 'react-native';
//
//
// class Navigation extends React.Component{
//   render() {
//     return (
//       <Navigator
//         style={styles.container}
//         initialRoute=\{\{id: 'first'}}
//         renderScene={this.navigatorRenderScene}/>
//     );
//   }
//
//   navigatorRenderScene(route, navigator) {
//     _navigator = navigator;
//     switch (route.id) {
//       case 'first':
//         return (<First navigator={navigator} title="first"/>);
//       case 'second':
//         return (<Second navigator={navigator} title="second" />);
//     }
//   }
// }
//
//
// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <Text>Hello world!</Text>
//     );
//   }
// }
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
