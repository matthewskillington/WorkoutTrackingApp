import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ExerciseItemComponent from './components/ExerciseItem/ExerciseItem';
import HeaderComponent from './components/Header/Header';
import LogExerciseModal from './components/LogExerciseModal/LogExerciseModal';
import exercises from './defaultExercises.js';

const App: () => React$Node = () => {
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

  function GetExercises() {
    AsyncStorage.getItem('@exercises').then((value) => {
      if (value != null) {
        setList(list.concat(JSON.parse(value)));
      }
    });
  }

  function StoreExercises() {
    try {
      AsyncStorage.setItem('@exercises', JSON.stringify(exercises));
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

export default App;
