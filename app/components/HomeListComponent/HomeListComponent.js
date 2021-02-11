import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ExerciseItemComponent from '../ExerciseItem/ExerciseItem';
import HeaderComponent from '../Header/Header';
import LogExerciseModal from '../LogExerciseModal/LogExerciseModal';
import exercises from '../../defaultExercises.js';

const HomeListComponent = () => {
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [listSelection, setSelection] = useState('');

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

  return (
    <>
      <SafeAreaView
        style={{
          height: `100%`,
        }}>
        <LogExerciseModal
          modalVisible={modalVisible}
          closeHandler={setModalVisible}
          title={listSelection.name}
        />
        <HeaderComponent />
        <ScrollView
          style={{
            backgroundColor: '#CCC',
            height: '100%',
          }}>
          {list.map((exercise) => {
            return (
              <ExerciseItemComponent
                key={exercise.name}
                onPressHandler={OpenModal}
                exerciseItem={exercise}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeListComponent;
