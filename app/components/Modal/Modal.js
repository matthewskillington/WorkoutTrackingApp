import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

const CustomModal = (props) => {
  const [repValue, ChangeReps] = React.useState('Reps');
  const [setValue, ChangeSets] = React.useState('Sets');

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
            <Text style={styles.modalText}>Reps</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                justifyContent: 'flex-start',
                width: '100%',
              }}
              onChangeText={(text) => ChangeReps(text)}
              value={repValue}
            />
            <Text style={styles.modalText}>Sets</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                justifyContent: 'flex-start',
                width: '100%',
              }}
              onChangeText={(text) => ChangeSets(text)}
              value={setValue}
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
  },
});

export default CustomModal;
