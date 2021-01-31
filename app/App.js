import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ExerciseItemComponent from './components/ExerciseItem/ExerciseItem';
import HeaderComponent from './components/Header/Header';

import exercises  from './defaultExercises.js';


const App: () => React$Node = () => {
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
