import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const NumericInputWithLabel = (props) => {
  return (
    <View
      style={{
        marginBottom: 20,
      }}>
      <Text styles={styles.inputLabel}>{props.label}</Text>
      <TextInput
        style={styles.input}
        //Regex prevents non numeric input into the fields
        onChangeText={(text) =>
          props.onChangeHandler(text.replace(/[^0-9]/g, ''))
        }
        value={props.repValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    paddingLeft: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
});

export default NumericInputWithLabel;
