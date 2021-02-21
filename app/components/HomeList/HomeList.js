import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import ExerciseItem from '../ExerciseItem/ExerciseItem';
import LogExerciseModal from '../LogExerciseModal/LogExerciseModal';
import exercises from '../../defaultExercises.js';
import {Header, Title, Body, Container, Left, Right} from 'native-base';

const HomeList = () => {
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
    <View style={styles.wrapper}>
      <Header>
        <Body>
          <Title>Workout Tracker</Title>
        </Body>
      </Header>
      <LogExerciseModal
        modalVisible={modalVisible}
        closeHandler={setModalVisible}
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

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#CCC',
    height: '100%',
  },
  scrollView: {
    height: '100%',
  },
});

export default HomeList;
