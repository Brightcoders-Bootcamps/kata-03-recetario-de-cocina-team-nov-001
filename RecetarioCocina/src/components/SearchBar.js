import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function SearchBar() {
  return (
    <View style={styles.cointainer}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={20} color="#FFFF" />
        <TextInput
          placeholder={`What do you want to eat?`}
          placeholderTextColor="#FFFF"
          style={styles.input}
        />
      </View>
      <Icon name="microphone" size={20} color="#FFFF" />
    </View>
  );
}
const styles = StyleSheet.create({
  cointainer: {
    margin: 15,
    backgroundColor: '#454741',
    borderRadius: 15,
    height: 50,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 100,
  },
  input: {
    fontSize: 17,
    marginLeft: 2,
  },
});
export default SearchBar;
