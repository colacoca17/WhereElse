import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// import Chat from './routes/Chat';
// import Camera from './routes/Camera';
// import Stories from './routes/Stories';
// import Me from './routes/Me';
export default class Menu extends Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const SubMenu = () => (
//   <Menu
//     routes={[
//       { component: Menu }
//     ]}
//     initialIndex={1}
//     horizontal={false}
//   />
// );

// const App = () => {
//   return (
//     <Menu />
//       // routes={[
//       //   { component: Menu }
//       // ]}
//       // initialIndex={1}
//   );
// };

// export default Menu;
