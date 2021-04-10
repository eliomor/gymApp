import  React , { useEffect, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';
import ExerciseItem from '../components/ExerciseItem';
import * as exercisesAction from '../store/action/exercises';

const MyExerciseScreen = (props) => {
   const dispatch = useDispatch()
   const trainingId = props.navigation.getParam('trainingId');
   const exercises = useSelector(state => state.exercises.availableExercises.filter(exercise => exercise.trainingId === trainingId));

  
  useEffect(() => {
    dispatch(exercisesAction.fetchExercises());
  }, [ dispatch]);


  if (exercises.length === 0) {
    return ( <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>No exercises found</Text>
    </View>
    );
  }
   return (
    <FlatList
      data={exercises}
      keyExtractor={item => item.exerciseId}
      renderItem={itemData => (
        <ExerciseItem
         exerciseName={itemData.item.exerciseName}
          onViewDetail={() => {
            props.navigation.navigate('ExerciseDetails', {exerciseId: itemData.item.exerciseId});
          }}
          onDelete={() => {
            dispatch(exercisesAction.deleteExercise(itemData.item.exerciseId));
          }}
          
        />       
      )}
    />
  );
};


MyExerciseScreen.navigationOptions = navData => {
  return {
  headerTitle: 'My Exercise',
 };  
};



export default MyExerciseScreen;

