import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Titles = ({title, name}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.subtitle}>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textContainer: {
    padding: 20,
  },
  text: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 18,
  },
  subtitle: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 23,
  },
});
export default Titles;
