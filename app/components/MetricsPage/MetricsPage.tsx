import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GetExercises } from '../../localStorage/localStorage';
import { Exercise } from '../../types';
import CustomHeader from '../CustomHeader/CustomHeader';

type Props = {
    navigation: any
}

const MetricsPage: React.FC<Props> = ({navigation}) => {
    const [list, setList] = useState(new Array<Exercise>());
    
    useEffect(() => {
        PopulateExercises();
    })

    const PopulateExercises = async () => {
        const exercises = await GetExercises();
        if (exercises != null) {
            setList(exercises);
        }
    }

    return (
        <>
            <CustomHeader navigation={navigation}/>
            <Text>
                    Welcome to the Metrics page
            </Text>
            <ScrollView>
                {list.map((exercise) => {
                    return (
                        <View
                            key={exercise.name}>
                            <Text>{exercise.name}</Text>
                            <Text>{exercise.lastPerformed}</Text>
                            <Text>{exercise.reps}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </>
    )
}

export default MetricsPage;