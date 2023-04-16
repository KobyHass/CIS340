import { React } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function Student(props) {
  return (
    <View>
      <Text>Hello, My name is {props.name} and I am student in CIS340</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> Welcome to CIS340 </Text>
      <Student name = " Koby Hass"/>
      <Student name = "Alice ####" />
      <Student name = "Jon Clark"/>
      <Student name = "Ramadan Abdunabi"/>
    </View>
  )
}