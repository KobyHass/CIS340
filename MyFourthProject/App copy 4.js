import React from 'react';
import { Text, View, FlatList } from 'react-native';

export default StatesApp = () => {
  return(
    <View style ={{flex: 1, paddingTop:22}}>
      <FlatList
        data = {[
          {key: 'Alabama'},
          {key: 'Alaska'},
          {key: 'Florida'},
          {key: 'California'},
          {key: 'Colorado'},
          {key: 'Washington'},
          {key: 'Nevada'},
          {key: 'Hawaii'},
          {key: 'New York'},
          {key: 'Maine'},
          {key: 'Minnesota'},
          {key: 'Wyoming'},
          {key: 'Massachusetts'},
          {key: 'Michigan'},
        ]}

        returnItem = {({iten}) => <Text style = {{padding: 10, fontSize: 20, height: 44}}> {item.key} </Text>}
        />
    </View>
  );
}

