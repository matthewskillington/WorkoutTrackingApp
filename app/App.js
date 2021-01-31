import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ExerciseItemComponent from './components/ExerciseItem/ExerciseItem';
import HeaderComponent from './components/Header/Header';
import exercises  from './defaultExercises.js';


const App: () => React$Node = () => {

	const list = [];

	useEffect(() => {
		AsyncStorage.getItem("alreadyLaunched").then(value => {
			if (value == null) {
				AsyncStorage.setItem("alreadyLaunched", JSON.stringify(true));
				StoreExercises();
			}
			GetExercises();
		})
	});

	function GetExercises() {
		let currentIteration = 1;
		AsyncStorage.getItem('@exercise' + currentIteration).then(value => {
			if (value != null) {
				list.push(JSON.parse(value));
				currentIteration++;
			} else {
				return;
			}
		})
	}

	async function StoreExercises() {
		for (const exercise of exercises) {
		try {
			await AsyncStorage.setItem('@exercise' + exercise.id, JSON.stringify(exercise))
		}
		catch (e) {
			console.log(e);
		}
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
