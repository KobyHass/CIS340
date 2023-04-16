import React from 'react';
import { Text, TextInput, View } from 'react-native';

function MyApp() {
  return (
    <view>
      <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS340! {"\n"}
      </Text>
    </view>
  );
}

export default function MutiComp(){
  return(

    <View style = {{
      flex: 1,
      justifyContent: 'Center',
      alignItems: 'center'
    }}>
      
      <Text>{"\n\n\n\n\n\n"} Welcome to my class </Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />

    </View>
  )
}
