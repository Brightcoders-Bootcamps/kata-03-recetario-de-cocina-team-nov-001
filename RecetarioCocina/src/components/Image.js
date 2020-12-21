import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Icons from './Icons';
import Titles from './Titles';
const Image = ({title, name, img, goBack}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: img}}
        style={styles.img}
        imageStyle={{opacity: 0.45, backgroundColor: 'black'}}>
        <Icons goBack={goBack} />
        <Titles title={title} name={name} />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
    opacity: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    width: '100%',
    height: '55%',
  },
});
export default Image;
