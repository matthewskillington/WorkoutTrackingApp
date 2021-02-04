import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../../styles/appStyles.js';

const NumericInputWithLabel = (props) => {
  return (
    <View
      style={{
        marginBottom: 20,
      }}>
      <Text style={styles.modalText}>{props.label}</Text>
      <TextInput
        style={{
          paddingLeft: 10,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          justifyContent: 'flex-start',
          width: '100%',
        }}
        //Regex prevents non numeric input into the fields
        onChangeText={(text) =>
          props.onChangeHandler(text.replace(/[^0-9]/g, ''))
        }
        value={props.repValue}
      />
    </View>
  );
};

export default NumericInputWithLabel;
