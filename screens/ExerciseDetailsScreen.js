import  React,  { useEffect } from 'react';
import { View, Text, Platform, StyleSheet, ScrollView, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';
import ExerciseItem from '../components/ExerciseItem';
import * as exercisesAction from '../store/action/exercises';

const ExerciseDetailsScreen = (props) => {
  const dispatch = useDispatch()
  const exerciseId = props.navigation.getParam('exerciseId');
  const exercises = useSelector(state => state.exercises.availableExercises.filter(exercise => exercise.exerciseId === exerciseId));


  useEffect(() => {
    dispatch(exercisesAction.fetchExercises());
  }, [dispatch]);
  
  return (
    <ScrollView>
        <Text style={styles.title}><Text>Name: </Text>{exercises.name}</Text>
        <View style={styles.actions}>
        </View>
  </ScrollView>
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
 
   }
 });
 

export default ExerciseDetailsScreen;



