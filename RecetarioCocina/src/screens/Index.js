import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import ListItem from '../components/ListItem';

function Index({navigation: {navigate}}) {
  const data = require('../db/recipes.json');
  const {Recipes} = data;
  const recentRecipes = Recipes.filter((recipe) => recipe.recent);
  return (
    <View style={styles.container} testID='index page'>
      <SearchBar />
      <ListItem navigate={navigate} title={'TRENDING'} Recipes={Recipes} />
      <ListItem navigate={navigate} title={'RECENT'} Recipes={recentRecipes} />
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
