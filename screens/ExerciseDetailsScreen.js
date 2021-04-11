import  React,  { useEffect } from 'react';
import { View, Text, Platform, StyleSheet, ScrollView, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import * as exercisesAction from '../store/action/exercises';

const ExerciseDetailsScreen = (props) => {
  const dispatch = useDispatch()
  const exerciseId = props.navigation.getParam('exerciseId');
  const exercises = useSelector(state => state.exercises.availableExercises.find(exercise => exercise.exerciseId === exerciseId));

  console.log(exercises)

  useEffect(() => {
    dispatch(exercisesAction.fetchExercises());
  }, [dispatch]);
  
  return (
  <LinearGradient colors={['#D03B29','#FEFEDF']} style={styles.gradient}> 
    <ScrollView>
        <Text style={styles.title}><Text>Name: </Text>{exercises ? exercises.exerciseName : ''}</Text>
        <Text style={styles.description}><Text>Sets Number: </Text>{exercises ? exercises.setsNumber : ''}</Text>
        <Text style={styles.description}><Text>Repetitions Number: </Text>{exercises ? exercises.repetitionsNumber : ''}</Text>
        <Text style={styles.description}><Text>Weight: </Text>{exercises ? exercises.weight : ''}</Text>
    </ScrollView>
  </LinearGradient>
  );
};



ExerciseDetailsScreen.navigationOptions = navData => {
  return {
  headerTitle: 'Exercise Details',
 };  
};

const styles = StyleSheet.create({
  actions: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     paddingHorizontal: 20
   },
  title: {
     fontFamily: 'open-sans-bold',
     fontSize: 30,
     color: '#888',
     textAlign: 'center',
     marginVertical: 20
   },
   description: {
     fontFamily: 'open-sans',
     fontSize: 20,
     textAlign: 'center',
     marginHorizontal: 20
   },
   actions: {
     alignItems: 'center',    
     justifyContent: 'center'
   },
   gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
 });
 

export default ExerciseDetailsScreen;



