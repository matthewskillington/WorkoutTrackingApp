import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ExerciseItemComponent from './components/ExerciseItem/ExerciseItem';
import HeaderComponent from './components/Header/Header';
import exercises  from './defaultExercises.js';


const App: () => React$Node = () => {

	const [list, setList] = useState([]);

	useEffect(() => {
		AsyncStorage.getItem("alreadyLaunched").then(value => {
			if (value == null) {
				AsyncStorage.setItem("alreadyLaunched", JSON.stringify(true));
				StoreExercises();
			}
			GetExercises();
		})
	},[]);

	function GetExercises() {
		AsyncStorage.getItem('@exercises').then(value => {
			if (value != null) {
				setList(list.concat(JSON.parse(value)));
			}
		})
	}

	async function StoreExercises() {
		try {
			await AsyncStorage.setItem('@exercises', JSON.stringify(exercises))
		}
		catch (e) {
			console.log(e);
		}
	}

	return (
		<>
		<SafeAreaView
			style={{
			height: `100%`
			}}>
			<HeaderComponent />
			<ScrollView
			style={{
				backgroundColor: '#CCC',
				height: '100%'
			}}>
			{list.map((exercise) => {
				return (
					<ExerciseItemComponent key={exercise.name} name={exercise.name} lastPerformed={exercise.lastPerformed}/>
				)
			})}
			</ScrollView>
		</SafeAreaView>
		</>
	);
};

export default App;
