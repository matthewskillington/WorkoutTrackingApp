import AsyncStorage from '@react-native-async-storage/async-storage';
import { Exercise } from '../types';

type GetExercisesWithMaxResponse = {
  exercises: Exercise[],
  max: number
}

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

const GetExercisesWithMax = async (): Promise<GetExercisesWithMaxResponse> => {
  const listFromDb: Array<Exercise> = [];
  let max = 0;
  try {
    const ids = JSON.parse(await AsyncStorage.getItem('exerciseList') || '');
    
    for (const id of ids) {
      const value = await AsyncStorage.getItem('exercise' + id);
      if (value != null) {
        const parsedObject = JSON.parse(value) as Exercise;
        max = parsedObject.reps > max ? parsedObject.reps : max;
        listFromDb.push(parsedObject);
      }
    }
  } catch (e) {
    console.log(e);
  }
  return {exercises: listFromDb, max: max};
};

const GetLeastPerformedExercise = async (): Promise<Exercise> => {
  const exercises = await GetExercises();
  let leastPerformed = exercises[0];
  exercises.forEach((exercise) => {
    if(exercise.reps < leastPerformed.reps) {
      leastPerformed = exercise;
    }
  });
  return leastPerformed;
}

export { StoreExercises, GetExercises, GetExercisesWithMax, GetLeastPerformedExercise };
