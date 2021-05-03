import AsyncStorage from '@react-native-async-storage/async-storage';
import { Exercise } from '../types';

const StoreExercises = (exercises: Array<Exercise>): void => {
  console.log('storing exercises');
  try {
    exercises.forEach((exercise) => {
      AsyncStorage.setItem('exercise' + exercise.id, JSON.stringify(exercise));
    });
    const listOfIds = exercises.map((item) => item.id);
    AsyncStorage.setItem('exerciseList', JSON.stringify(listOfIds));
  } catch (e) {
    console.log(e);
  }
};

const GetExercises = async (): Promise<Array<Exercise>> => {
  const listFromDb: Array<Exercise> = [];
  try {
    const ids = JSON.parse(await AsyncStorage.getItem('exerciseList') || '');
    
    for (const id of ids) {
      const value = await AsyncStorage.getItem('exercise' + id);
      if (value != null) {
        listFromDb.push(JSON.parse(value));
      }
    }
  } catch (e) {
    console.log(e);
  }
  return listFromDb;
};

export { StoreExercises, GetExercises };
