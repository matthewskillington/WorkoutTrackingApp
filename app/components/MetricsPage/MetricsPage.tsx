import React, { useContext } from 'react';
import { useState, useEffect  } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { getTimeSinceNow } from '../../helpers/timeSinceNowHelper';
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
            marginVertical: 20,
            fontWeight: '300',
            color: colors.PrimaryText,
        },
        itemTitle: {
            fontSize: 18,
            margin: '2%',
            fontWeight: '300',
            color: colors.PrimaryText,
        },
        itemWrapper: {
            backgroundColor: colors.MasterGrey100,
            margin: '2%', 
            padding: '2%', 
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
            color: '#FFF',
        },
        wrapper: {
            backgroundColor: colors.MasterGrey70,
            height: '100%',
        },
        updatedText: {
            color: colors.SecondaryText,
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
        <View style={styles.wrapper}>
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
                                style={styles.itemTitle}>{exercise.name}</Text>
                            <View 
                                style={[styles.progressBar, widthStyle(exercise.reps)]}>
                                <Text style={styles.repCount}>{exercise.reps}</Text>
                            </View>
                            <Text style={styles.updatedText}>Updated: {getTimeSinceNow(exercise.lastPerformed)}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    )
}

export default MetricsPage;