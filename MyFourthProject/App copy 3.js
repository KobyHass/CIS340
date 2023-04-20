import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

const dog ={
  url:  'https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494_960_720.png',
  width: 64,
  height: 64
}

export default MyScrollViewApp = () => (
    <ScrollView>
      <Text style= {{fontsize: 80}}>Try to scroll down. </Text>
      <Image source={require('./assets/dog-1728494_960_720.png')} style = {{width: 64, height:64}} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style= {{fontsize: 80}}>Keep trying </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style= {{fontsize: 80}}>You got this </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style= {{fontsize: 80}}>TKeep trying </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
    </ScrollView>
  );

