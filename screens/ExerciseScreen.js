import  React , { useEffect, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';
import ExerciseItem from '../components/ExerciseItem';
import * as exercisesAction from '../store/action/exercises';

const ExerciseScreen = (props) => {
   const dispatch = useDispatch()
   const trainingId = props.navigation.getParam('trainingId');
   const userId = props.navigation.getParam('userId');
   const exercises = useSelector(state => state.exercises.availableExercises.filter(exercise => exercise.trainingId === trainingId));

   const addHandler = useCallback(() => {
    props.navigation.navigate('AddExercise', {trainingId: trainingId, userId: userId,});
  }, []);
  
  useEffect(() => {
    dispatch(exercisesAction.fetchExercises());
  }, [ dispatch]);

  useEffect(() => {
    props.navigation.setParams({ add: addHandler });
  }, [addHandler]);

  if (exercises.length === 0) {
    return ( <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>No exercises found, maybe start creating some</Text>
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


ExerciseScreen.navigationOptions = navData => {
  const addFn = navData.navigation.getParam('add');
  return {
  headerTitle: 'All Exercise',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="add"
        iconName={
          Platform.OS === 'android' ? 'md-add' : 'ios-add'
        }
        onPress={addFn} 
      />
    </HeaderButtons>
  ),
 };  
};



export default ExerciseScreen;

