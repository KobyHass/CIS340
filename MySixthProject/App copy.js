import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const csuLogo ={
    url: "https://media.istockphoto.com/vectors/ram-vector-id1003202434",
    width: 80,
    height: 80
  };
  
  return (
    <View style={styles.container}>
      
      <Image
        style = {styles.localCSULogo}
        source = {requires('.com/vectors/ram-vector-id1003202434')}
      />


      <Image
        style = {styles.urlCSULogo}
        source = {{
          url: "https://media.istockphoto.com/vectors/ram-vector-id1003202434"
        }}
      />

      <Image
      style = {styles.stretchLogo}
      source={csuLogo}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },

  localCSULogo: {
    width: 55,
    height: 65,
  },

  urlCSULogo: {
    width: 50,
    height: 50,
  },

  stretchLogo: {
    width: 50,
    height: 200,
    resizeMode: 'contain'
  }
});
