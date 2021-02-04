import React, {useState} from 'react';
import {Alert, Modal, Text, TouchableHighlight, View} from 'react-native';

import styles from '../../styles/appStyles.js';
import NumericInputWithLabel from '../NumericInputWithLabel/NumericInputWithLabel.js';

const CustomModal = (props) => {
  const [repValue, ChangeReps] = React.useState('0');
  const [setValue, ChangeSets] = React.useState('0');

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                marginBottom: 20,
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              {props.title}
            </Text>
            <NumericInputWithLabel
              label="Reps"
              repValue={repValue}
              onChangeHandler={ChangeReps}
            />

            <NumericInputWithLabel
              label="Sets"
              repValue={setValue}
              onChangeHandler={ChangeSets}
            />

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                props.closeHandler(!props.modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
