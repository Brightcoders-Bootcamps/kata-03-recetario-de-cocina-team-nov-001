import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ShareIcon from 'react-native-vector-icons/EvilIcons';
const Icons = ({goBack}) => {
  const [heart, setHeart] = useState('true');
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => goBack()}>
        <Icon name="close" size={30} color="#FFFF" />
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={{marginRight: 15}}>
          <ShareIcon name="share-apple" size={40} color="#FFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setHeart((prev) => !prev)}>
          {heart ? (
            <Icon name="hearto" size={30} color="#FFFF" />
          ) : (
            <Icon name="heart" size={30} color="#FFFF" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  rightContainer: {flexDirection: 'row', justifyContent: 'center'},
});
export default Icons;
