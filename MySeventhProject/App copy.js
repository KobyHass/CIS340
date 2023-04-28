import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  
  return (
    <View style={styles.container}>
      
      <View style = {styles.containerButton}>
        <Button
          onPress={() => {
            alert('You tapped a button');
          }}
          title = "Press Button 1"
        />
      </View>

      <View style = {styles.containerLayoutbutton}>

        <Button 
          onPress={() => {
            alert('You tapped button 2');
          }}
          title = "Press Button"
        />

        <Button
          onPress={() => {
            alert('You tapped the great button');
          }}
          title = "Great!"
          color = 'green'
        />
      </View>

      <View style = {styles.containerButton}>

        <Button
          onPress={() => {
            alert('You tapped button Tap Me!');
          }}
          title = "Tap Me!"
        />
        
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  text: {
    color: "red",
    fontSize: 40,
    fontWeight: 'bold'
  }
});
