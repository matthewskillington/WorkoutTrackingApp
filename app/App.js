import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ExerciseItemComponent from './components/ExerciseItem/ExerciseItem';
import HeaderComponent from './components/Header/Header';

const exercises = [
  {
    name: 'Dumbbell Curl',
    lastPerformed: null,

  },
  {
    name: 'Side elevations',
    lastPerformed: null
  }
];

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView
        style={{
          height: `100%`
        }}>
        <HeaderComponent />
        <View
          style={{
          }}>
          {exercises.map((exercise) => {
            return (
              <ExerciseItemComponent name={exercise.name}/>
            )
          })}
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
