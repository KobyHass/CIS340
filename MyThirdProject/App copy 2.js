import { React } from 'react';
import { Text, View, Image } from 'react-native';

export default function CatApp() {

  let pic = {
    URL: 'https://www.bing.com/images/search?view=detailV2&ccid=H6p8utG7&id=79842088F47B28AC238964AA3C53F733155FD161&thid=OIP.H6p8utG7Cjz4PIHCDexa8QHaE8&mediaurl=https%3a%2f%2fimages.pexels.com%2fphotos%2f326875%2fpexels-photo-326875.jpeg%3fcs%3dsrgb%26dl%3dadorable-animal-blur-326875.jpg%26fm%3djpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1faa7cbad1bb0a3cf83c81c20dec5af1%3frik%3dYdFfFTP3UzyqZA%26pid%3dImgRaw%26r%3d0&exph=2771&expw=4156&q=stock+cat+image&simid=608053840699270420&FORM=IRPRST&ck=F3DB0BAB7B25FC605009A915BE7A0188&selectedIndex=8'};
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source = {pic}
        style = {{Width: 200, height: 200}}
      />
      <Text>Hello, I am a stock image</Text>
    </View>
  );
}