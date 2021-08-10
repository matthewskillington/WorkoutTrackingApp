import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GetLeastPerformedExercise } from '../../localStorage/localStorage';
import { ThemeContext } from '../../theme-context';
import { Exercise } from '../../types';
import CustomHeader from '../CustomHeader/CustomHeader';

type Props = {
    navigation: any,
}

type SuggestedExercise = {
    reps: number,
    sets: number,
}

const suggestExercise = (seed: number): SuggestedExercise => {
    if(seed == 0){
        return { reps: 8, sets: 5};
    }
    if(seed == 1){
        return { reps: 10, sets: 4};
    }
    return { reps: 12, sets: 3};
}

const ExerciseImage1 = require('../../images/exercise-images/dumbbellOnMat.jpg');
const ExerciseImage2 = require('../../images/exercise-images/dumbbellRack.jpg');
const ExerciseImage3 = require('../../images/exercise-images/dumbbellRow.jpg');
const ExerciseImage4 = require('../../images/exercise-images/tricepDip.jpg');
const ExerciseImage5 = require('../../images/exercise-images/barbell.jpeg');

const ExerciseImages = [ExerciseImage1, ExerciseImage2, ExerciseImage3, ExerciseImage4, ExerciseImage5];


const SuggestExercise: React.FC<Props> = ({navigation}) => {
    const [currentExercise, setCurrentExercise] = useState<Exercise | undefined>();
    const [suggestedExercise, setSuggestedExercise] = useState<SuggestedExercise>({ sets: 4, reps: 10});
    const colors = useContext(ThemeContext);

    useEffect(() => {
        setData();
    }, []) 

    const setData = async () => {
        const exercise = await GetLeastPerformedExercise();
        if (exercise != null){
            setCurrentExercise(exercise);
            setSuggestedExercise(suggestExercise(Math.floor(Math.random() * 3)));
        }
    }

    const onNext = () => {
        if(currentExercise){
            const updatedExercise = currentExercise;

            updatedExercise.reps += (suggestedExercise.sets * suggestedExercise.reps);
            updatedExercise.lastPerformed = Date.now()
            AsyncStorage.setItem('exercise' + currentExercise.id, JSON.stringify(currentExercise));
        }
        setData();
    }

    const styles = StyleSheet.create({
        wrapper: {
          backgroundColor: colors.MasterGrey70,
          height: '100%',
        },
        suggestionWrapper: {
            height: '100%',
            flex: 1,
        },
        suggestionItem: {
            margin: '2%',
            backgroundColor: colors.MasterGrey100,
            flex: 1,
        },
        nextButton: {
            padding: 20,
            backgroundColor: colors.Success
        },
        nextButtonText: {
            color: '#FFF',
            textAlign: 'center'
        },
        titleWrapper: {
            backgroundColor: colors.MasterGrey50,
        },
        exerciseTitle: {
            alignSelf: 'flex-start',
            fontSize: 18,
            margin: 15,
            fontWeight: '300',
            color: '#FFF',
        },
        setRepWrapper: {
            marginBottom: 50
        },
        setRepText: {
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '600',
            color: colors.PrimaryText,
        },
        bottomWrapper: {
            marginTop: 'auto',
            paddingTop: 15,
        },
        imageWrapper: {
            backgroundColor: '#eee',
            flex: 1,
            overflow: 'hidden',
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        exerciseImage: {
            alignSelf: 'center',
            height:'100%', 
            width:'100%'
        }
      });

    return (
        <View style={styles.wrapper}>
            <CustomHeader navigation={navigation}/>
            <View style={styles.suggestionWrapper}>
                <View style={styles.suggestionItem}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.exerciseTitle}>
                            {currentExercise?.name}
                        </Text>
                    </View>

                    <View style={styles.imageWrapper}>
                        <Image
                            source={ExerciseImage5}
                            style={styles.exerciseImage}/>
                    </View>

                    <View style={styles.bottomWrapper}>
                        <View style={styles.setRepWrapper}>
                            <Text style={styles.setRepText}>{suggestedExercise.sets}</Text>
                            <Text style={styles.setRepText}>X</Text>
                            <Text style={styles.setRepText}>{suggestedExercise.reps}</Text>
                        </View>
                        
                        
                        <TouchableOpacity
                            onPress={() => onNext()}
                            style={styles.nextButton}>
                            <Text style={styles.nextButtonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
            
           
        </View>
    );
}

export default SuggestExercise;