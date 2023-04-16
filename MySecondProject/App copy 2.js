import React from 'react';
import { Text } from 'react-native';

export default function MyApp() {
    
    function getFullName(fname, mName, lName){
      return fname + " " + mName + " " + lName;
    }

    const pet = "Cat";
    return (
      <Text>
        {"\n\n\n\n\n\n\n"}
        hello, I am a student in CIS40!{"\n"}
        My Full Name is {getFullName("Koby", "Gene", "Hass")} {"\n"}
        I have a {pet}!
      </Text>
    );
}
