import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

import ExerciseItem from '../ExerciseItem/ExerciseItem';
import LogExerciseModal from '../LogExerciseModal/LogExerciseModal';
import exercises from '../../defaultExercises.js';
import { ThemeContext } from '../../theme-context';

import CustomHeader from '../CustomHeader/CustomHeader';

const HomeList = ({navigation}) => {
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [listSelection, setSelection] = useState('');
  const colors = useContext(ThemeContext);

  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: colors.MasterGrey70,
      height: '100%',
    },
    scrollView: {
      height: '100%',
    },
  });

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', JSON.stringify(true));
        StoreExercises();
      }
      GetExercises();
    });
  }, []);

  async function GetExercises() {
    try {
      var ids = JSON.parse(await AsyncStorage.getItem('exerciseList'));
      var listFromDb = [];
      for (const id of ids) {
        const value = await AsyncStorage.getItem('exercise' + id);
        if (value != null) {
          listFromDb.push(JSON.parse(value));
        }
      }
      setList(listFromDb);
    } catch (e) {
      console.log(e);
    }
  }

  function StoreExercises() {
    try {
      exercises.forEach((exercise) => {
        AsyncStorage.setItem(
          'exercise' + exercise.id,
          JSON.stringify(exercise),
        );
      });
      var listOfIds = exercises.map((item) => item.id);
      AsyncStorage.setItem('exerciseList', JSON.stringify(listOfIds));
    } catch (e) {
      console.log(e);
    }
  }

  // Exercise parameter is the exercise to be set as the current selection
  // Selected exercise is what data will be logged against
  function OpenModal(exercise) {
    setModalVisible(true);
    setSelection(exercise);
  }

  function HandleModalSubmission(reps, sets) {
    setModalVisible(false);
    listSelection.reps += (sets * reps);
    listSelection.lastPerformed = Date.now()
    AsyncStorage.setItem('exercise' + listSelection.id, JSON.stringify(listSelection));
  }

  function OpenMenu() {
    navigation.toggleDrawer()
  }

  return (
    <View style={styles.wrapper}>
      <CustomHeader navigation={navigation}/>
      <LogExerciseModal
        modalVisible={modalVisible}
        closeHandler={HandleModalSubmission}
        title={listSelection.name}
      />
      <ScrollView style={styles.scrollView}>
        {list.map((exercise) => {
          return (
            <ExerciseItem
              key={exercise.name}
              onPressHandler={OpenModal}
              exerciseItem={exercise}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeList;
