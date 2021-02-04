import React from 'react';
import {View, Text, Button} from 'react-native';

const ExerciseItemComponent = (props) => {
  return (
    <View
      style={{
        height: 97,
        padding: 5,
        width: `96%`,
        margin: `2%`,
        backgroundColor: '#FFF',
      }}>
      <Text
        style={{
          color: '#1E1C26',
          fontWeight: '500',
          fontSize: 18,
        }}>
        {props.exerciseItem.name}
      </Text>
      <Text
        style={{
          color: '#595763',
          fontWeight: '500',
          fontSize: 14,
        }}>
        Last Performed: {props.exerciseItem.lastPerformed}
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: '#24ab75',
          marginTop: 10,
        }}>
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

export default ExerciseItemComponent;
