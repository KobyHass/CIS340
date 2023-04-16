import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MyApp() {
  return (
    <view>
      <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS340! {"\n"}
      </Text>
      <TextInput 
      style = {{
        borderColor: "gray",
        height: 40,
        borderWidth: 1
      }}
      defaultValue = "Enter your input: "/>
    </view>
  );
}
