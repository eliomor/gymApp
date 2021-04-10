import  React,  { useEffect, useCallback } from 'react';
import { View, Text, FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';
import TrainingItem from '../components/TrainingItem';
import * as trainingsAction from '../store/action/trainings';

const TrainingScreen = (props) => {
   const dispatch = useDispatch()
   const userId = props.navigation.getParam('userId');
   const trainings = useSelector(state => state.trainings.userTrainings);

   useEffect(() => {
     dispatch(trainingsAction.fetchTrainings(userId));
   }, [dispatch]);

   const submitHandler = useCallback(() => {
   props.navigation.navigate('AddTraining', {userId: userId});
  }, [dispatch]);
   
  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);


   if (trainings.length === 0) {
    return ( <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>No trainings found, maybe start creating some</Text>
    </View>
    );
  }

   return (
    <FlatList
      data={trainings}
      keyExtractor={item => item.trainingId}
      renderItem={itemData => (
        <TrainingItem
          date={itemData.item.date}
          onViewDetail={() => {
            props.navigation.navigate('Exercise', {trainingId: itemData.item.trainingId, userId: itemData.item.userId });
          }}
          onDelete={() => {
            dispatch(trainingsAction.deleteTraining(itemData.item.trainingId));
          }}
        />       
      )}
    />
  );
};

TrainingScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
  return {
  headerTitle: 'All Trainings',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="add"
        iconName={
          Platform.OS === 'android' ? 'md-add' : 'ios-add'
        }
        onPress={submitFn}
      />
    </HeaderButtons>
  ),
 };  
};


export default TrainingScreen;

