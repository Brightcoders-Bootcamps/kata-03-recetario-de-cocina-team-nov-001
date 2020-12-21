import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const DishDetails = ({servings, data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredients</Text>
      <Text style={styles.title}>for {servings} servings</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => (
          <View style={styles.listContainer}>
            <Text style={styles.listText}>{item.name}</Text>
            <Text style={styles.listText}>{item.quantity}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33302d',
    height: '45%',
    paddingTop: 15,
  },
  listContainer: {
    paddingTop: 20,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.2,
    width: '90%',
    alignSelf: 'center',
  },
  listText: {
    color: '#FFF',
  },
  title: {
    color: '#FFF',
    fontSize: 17,
    marginLeft: 20,
  },
});
export default DishDetails;
