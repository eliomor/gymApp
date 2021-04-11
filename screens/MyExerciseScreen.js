import  React , { useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../components/UI/HeaderButton';
import MyExerciseItem from '../components/MyExerciseItem';
import * as exercisesAction from '../store/action/exercises';

const MyExerciseScreen = (props) => {
   const dispatch = useDispatch()
   const trainingId = props.navigation.getParam('trainingId');
   const exercises = useSelector(state => state.exercises.availableExercises.filter(exercise => exercise.trainingId === trainingId));

  
  useEffect(() => {
    dispatch(exercisesAction.fetchExercises());
  }, [ dispatch]);


  if (exercises.length === 0) {
    return ( 
      <LinearGradient colors={['#D03B29','#FEFEDF']} style={styles.gradient}> 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No exercises found</Text>
        </View>
      </LinearGradient>

    );
  }
   return (
   <LinearGradient colors={['#D03B29','#FEFEDF']} style={styles.gradient}> 
    <FlatList
      data={exercises}
      keyExtractor={item => item.exerciseId}
      renderItem={itemData => (
        <MyExerciseItem
         exerciseName={itemData.item.exerciseName}
          onViewDetail={() => {
            props.navigation.navigate('ExerciseDetails', {exerciseId: itemData.item.exerciseId});
          }}
        />       
      )}
    />
  </LinearGradient>
  );
};


MyExerciseScreen.navigationOptions = navData => {
  return {
  headerTitle: 'My Exercise',
 };  
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});


export default MyExerciseScreen;

