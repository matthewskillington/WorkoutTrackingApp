import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ExerciseItemComponent from './components/ExerciseItem/ExerciseItem';
import HeaderComponent from './components/Header/Header';
import HomeListComponent from './components/HomeListComponent/HomeListComponent';
import LogExerciseModal from './components/LogExerciseModal/LogExerciseModal';
import exercises from './defaultExercises.js';

const App: () => React$Node = () => {
  return <HomeListComponent />;
};

export default App;
