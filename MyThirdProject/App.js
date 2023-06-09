import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';

function TV(props) {

  const [isOff, setIsOFF] = useState(true);
  return(
    <View>
      {"\n\n\n\n\n"}
      <Text>
        This is {props.name} TV, and it is {isOff ? "OFF" : "Turned Me On"}
      </Text>
      <Button
        onPress = {() => {
          setIsOFF(false);
     }}
     disabled = {!isOff}
     title = {isOff ? "Turn Me On, Please!" : "Thank You!"}
    />
    </View>
  );
}

export default function MultiTVs(){
  return(
    <View>
      <TV name = "LG"/>
      <TV name = "Samsung" />
    </View>
  )
}

    

  

