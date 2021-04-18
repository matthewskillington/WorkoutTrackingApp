import AsyncStorage from '@react-native-async-storage/async-storage';

function useLocalStorage(){

    const StoreExercises = (exercises) => {
        console.log("storing exercises");
        try {
            exercises.forEach((exercise) => {
              AsyncStorage.setItem(
                'exercise' + exercise.id,
                JSON.stringify(exercise),
              );
            });
            var listOfIds = exercises.map((item) => item.id);
            AsyncStorage.setItem('exerciseList', JSON.stringify(listOfIds));
          } catch (e) {
            console.log(e);
          }
    }

    const GetExercises = async () => {
        try {
            var ids = JSON.parse(await AsyncStorage.getItem('exerciseList'));
            var listFromDb = [];
            for (const id of ids) {
              const value = await AsyncStorage.getItem('exercise' + id);
              if (value != null) {
                listFromDb.push(JSON.parse(value));
              }
            }
            return listFromDb;
          } catch (e) {
            console.log(e);
          }
    }

    return {
        StoreExercises,
        GetExercises
    };
}

export { useLocalStorage };