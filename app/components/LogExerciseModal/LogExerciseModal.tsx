import React, {useContext, useState} from 'react';
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';
import { ThemeContext } from '../../theme-context.js';
import NumericInputWithLabel from '../NumericInputWithLabel/NumericInputWithLabel';

type Props = {
  modalVisible: boolean,
  title: string,
  closeHandler: (reps: number, sets: number) => void;
}

const LogExerciseModal: React.FC<Props> = (props) => {
  const [repValue, ChangeReps] = React.useState('0');
  const [setValue, ChangeSets] = React.useState('0');
  
  const colors = useContext(ThemeContext);

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
      backgroundColor: colors.ModalBackground,
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
      backgroundColor: '#2196F3',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    openButtonTextStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#FFF'
    },
    modalTitle: {
      marginBottom: 20,
      fontWeight: 'bold',
      fontSize: 18,
      color: colors.PrimaryText
    },
  });

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
            <Text style={styles.modalTitle}>{props.title}</Text>
            <NumericInputWithLabel
              label="Reps"
              value={repValue.toString()}
              onChangeHandler={ChangeReps}
            />

            <NumericInputWithLabel
              label="Sets"
              value={setValue.toString()}
              onChangeHandler={ChangeSets}
            />

            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                props.closeHandler(parseInt(repValue), parseInt(setValue));
              }}>
              <Text style={styles.openButtonTextStyle}>Submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LogExerciseModal;
