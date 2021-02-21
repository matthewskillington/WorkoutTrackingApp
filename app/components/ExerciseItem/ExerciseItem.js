import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ExerciseItem = (props) => {
  return (
    <View style={styles.wrappingView}>
      <Text style={styles.topTitle}>{props.exerciseItem.name}</Text>
      <Text style={styles.secondaryMessage}>
        Last Performed: {props.exerciseItem.lastPerformed}
      </Text>
      <View style={styles.bottomWrapper}>
        <Button
          title="Log exercise"
          color="#FFF"
          onPress={() => {
            props.onPressHandler(props.exerciseItem);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrappingView: {
    height: 97,
    padding: 5,
    width: `96%`,
    margin: `2%`,
    backgroundColor: '#FFF',
  },
  topTitle: {
    color: '#1E1C26',
    fontWeight: '500',
    fontSize: 18,
  },
  secondaryMessage: {
    color: '#595763',
    fontWeight: '500',
    fontSize: 14,
  },
  bottomWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#24ab75',
    marginTop: 10,
  },
});

export default ExerciseItem;
