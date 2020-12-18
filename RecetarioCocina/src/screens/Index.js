import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import ListItem from '../components/ListItem';
import HorizontalList from '../components/HorizontalList';

function Index({navigation: {navigate}}) {
  const data = require('../db/recipes.json');
  const {Recipes} = data;

  return (
    <View style={styles.container}>
      <SearchBar />
      <ListItem navigate={navigate} title={'TRENDING'} Recipes={Recipes} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33302d',
  },
});
export default Index;
