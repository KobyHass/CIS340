import React, {Component} from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class TouchableButton extends Component {
  
  _onPressButton() {
    alert('You tapped a  button')
  }
  
  render() {
  return (
    <View style={styles.container}>
      
      <View style = {styles.containerButton}>
        <Button
          onPress={this._onPressButton}
          title = "Press Button 1"
        />
      </View>

      <View style = {styles.containerLayoutbutton}>

        <Button 
          onPress= {this._onPressButton}
          title = "Press Button"
        />

        <Button
          onPress= {this._onPressButton}
          title = "Great!"
          color = 'green'
        />
      </View>

      <View style = {styles.containerButton}>

        <Button
          onPress={this._onPressButton}
          title = "Tap Me!"
        />

      </View>


    </View>
  );
}
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
