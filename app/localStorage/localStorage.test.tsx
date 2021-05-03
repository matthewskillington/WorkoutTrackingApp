import 'react-native';
import { Exercise } from '../types';
import { StoreExercises } from './localStorage';

const mockSetItem = jest.fn();
jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: (key: string, value: string) => mockSetItem(key, value)
}));

it('should store exercises when given an array of exercises', () => {
    //Arrange:
    const exercises = new Array<Exercise>();
    exercises.push(
    {
        id: 0,
        name: 'test exercise A',
        lastPerformed: '',
        reps: 0
    },
    {
        id: 1,
        name: 'test exercise B',
        lastPerformed: '',
        reps: 10
    });
    const stringExercise1 = JSON.stringify(exercises[0]);
    const stringExercise2 = JSON.stringify(exercises[1]);

    //Act:
    StoreExercises(exercises);

    expect(mockSetItem).toHaveBeenCalledWith('exercise0', stringExercise1);
    expect(mockSetItem).toHaveBeenCalledWith('exercise1', stringExercise2);
});

it('should store exerciseList when given an array of exercises', () => {
    //Arrange:
    const exercises = new Array<Exercise>();
    exercises.push(
    {
        id: 0,
        name: 'test exercise A',
        lastPerformed: '',
        reps: 0
    },
    {
        id: 1,
        name: 'test exercise B',
        lastPerformed: '',
        reps: 10
    });

    //Act:
    StoreExercises(exercises);

    expect(mockSetItem).toHaveBeenCalledWith('exerciseList', "[0,1]");
});
