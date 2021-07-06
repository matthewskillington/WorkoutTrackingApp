import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import ExerciseItem from '../ExerciseItem/ExerciseItem';
import LogExerciseModal from '../LogExerciseModal/LogExerciseModal';
import exercises from '../../defaultExercises';
import { ThemeContext } from '../../theme-context';

import CustomHeader from '../CustomHeader/CustomHeader';
import { GetExercises, StoreExercises } from '../../localStorage/localStorage';
import { Exercise } from '../../types';

type Props = {
  navigation: any
}

const HomeList: React.FC<Props> = ({navigation}) => {
  const [list, setList] = useState<Exercise[]>([]);
  const [listSelection, setSelection] = useState<Exercise | undefined>();
  const [modalVisible, setModalVisible] = useState(false);
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
        StoreExercises(exercises);
      }
      PopulateExercises();
    });
  }, []);

  const PopulateExercises = async () => {
    let exercisesFromStorage = await GetExercises();
    if (exercisesFromStorage != null) {
      setList(exercisesFromStorage);
    }
  }
 
  // Exercise parameter is the exercise to be set as the current selection
  // Selected exercise is what data will be logged against
  function OpenModal(exercise: Exercise) {
    setModalVisible(true);
    setSelection(exercise);
  }

  function HandleModalSubmission(reps: number, sets: number, cancelled: boolean) {
    setModalVisible(false);
    if(!cancelled && listSelection){
      listSelection.reps += (sets * reps);
      listSelection.lastPerformed = Date.now()
      AsyncStorage.setItem('exercise' + listSelection.id, JSON.stringify(listSelection));
    }
  }

  return (
    <View style={styles.wrapper}>
      <CustomHeader navigation={navigation}/>
      <LogExerciseModal
        modalVisible={modalVisible}
        closeHandler={HandleModalSubmission}
        title={listSelection?.name || ''}
      />
      <ScrollView style={styles.scrollView}>
        {list.map((exercise: Exercise) => {
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
