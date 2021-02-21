import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.line}></View>
      <Text style={styles.text}>Workout Tracking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: 'row',
  },
  line: {
    backgroundColor: `#A63838`,
    width: 10,
    height: 30,
    marginRight: 10,
  },
  text: {
    fontSize: 24,
    color: '#A63838',
    fontWeight: `bold`,
  },
});

export default Header;
