import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const ListItem = ({navigate, title, Recipes}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>{title}</Text>
      <FlatList
        horizontal
        data={Recipes}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => (
          <TouchableOpacity
            testID="btn"
            onPress={() => navigate('Details', {item, title})}
            style={styles.Item}>
            <Image style={styles.Image} source={{uri: item.img}} />
            <Text style={styles.Text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Item: {
    margin: 10,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    width: 120,
  },
  Image: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
  Text: {
    color: '#FFF',
    marginTop: 10,
  },
  Title: {
    color: '#c04099',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  Container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ListItem;
