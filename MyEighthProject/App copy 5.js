import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionAsync();

    if (permissionResultResult.granted == false){
      alert("Permission is required");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled == true){
      return;
    }

    setSelectedImage({ localUrl: pickerResult.uri});
  };

  if (selectedImage !== null){
    return(
      <View style = {styles.container}>
        <Image source = {{uri:selectedImage.localUrl}} />
      </View>
    )
  }
   
  return (
   <View style={styles.container}>
      <Image source = {'https://github.com/AbdunabiRamadan/CIS340-Images'}
              style = {styles.logo} />
       
       <Text style={styles.insts}>
        Press the button below to select an image on your phone.
      </Text>

      <TouchableOpacity style = {styles.button} onPress = {() => alert('You Have not selcted an image yet')}>
        <Text style = {styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>
      
    </View>
  );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFE0"
  },

  button: {
    borderRadius: 5,
    backgroundColor: "#778899",
    padding: 10
  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },

  insts: {
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10
  },

  buttonText: {
    fontSize: 20,
    color: "#fff"
  },

  selImage:{
    width:300,
    height:300,
    resizeMode:'contain'
  }
});