import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ExerciseItemComponent from './components/ExerciseItem/ExerciseItem';
import HeaderComponent from './components/Header/Header';

import exercises  from './defaultExercises.js';


const App: () => React$Node = () => {
  useEffect(() => {
    async function StoreExercises() {
      for (const exercise of exercises) {
        try {
          await AsyncStorage.setItem('@exercise' + exercise.key, JSON.stringify(exercise))
        }
        catch (e) {
          console.log(e);
        }
      }
    }
    StoreExercises();
  });

  return (
    <>
      <SafeAreaView
        style={{
          height: `100%`
        }}>
        <HeaderComponent />
        <ScrollView
          style={{
            backgroundColor: '#CCC',
            height: '100%'
          }}>
          {exercises.map((exercise) => {
            return (
              <ExerciseItemComponent name={exercise.name} lastPerformed={exercise.lastPerformed}/>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
