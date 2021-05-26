import React, { useContext } from 'react';
import { useState, useEffect  } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GetExercisesWithMax } from '../../localStorage/localStorage';
import { ThemeContext } from '../../theme-context';
import { Exercise } from '../../types';
import CustomHeader from '../CustomHeader/CustomHeader';

type Props = {
    navigation: any,
}

const MetricsPage: React.FC<Props> = ({navigation}) => {
    const [list, setList] = useState(new Array<Exercise>());
    const [max, setMax] = useState(0);
    const colors = useContext(ThemeContext);

    const styles = StyleSheet.create({
        pageTitle: {
        fontSize: 18,
        margin: '2%',
        fontWeight: '300'
        },
        itemWrapper: {
            backgroundColor: colors.MasterGrey100,
            margin: '2%', 
            padding: '2%', 
        },
        itemTitle: {
            fontSize: 14,
        },
        progressBar: {
            marginVertical: 10,
            height: 30,
            width: '100%',
            backgroundColor: colors.Success,
            flex: 1,
            justifyContent: 'flex-end',
            flexDirection: 'row',
            minWidth: '5%',
        },
        repCount: {
            margin: 5,
            color: colors.MasterGrey100,
        }
    });
    
    useEffect(() => {
        PopulateExercises();
    })

    const PopulateExercises = async () => {
        const { exercises, max } = await GetExercisesWithMax();
        if (exercises != null) {
            setMax(max);
            setList(exercises);
        }
    }

    const widthStyle = (reps: number) => {
        return {
            width: (reps / max * 100).toString() + '%'
        }
    }

    return (
        <>
            <CustomHeader navigation={navigation}/>
            <Text style={styles.pageTitle}>
                    Welcome to the Metrics page
            </Text>
            <ScrollView
                testID='scrollview-wrapper'>
                {list.map((exercise) => {
                    return (
                        <View
                            style={styles.itemWrapper}
                            key={exercise.name}>
                            <Text
                                style={styles.pageTitle}>{exercise.name}</Text>
                            <View 
                                style={[styles.progressBar, widthStyle(exercise.reps)]}>
                                <Text style={styles.repCount}>{exercise.reps}</Text>
                            </View>
                            <Text>{exercise.lastPerformed}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </>
    )
}

export default MetricsPage;