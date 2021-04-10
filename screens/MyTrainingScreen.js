import  React,  { useEffect, useCallback } from 'react';
import { View, Text, FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';
import MyTrainingItem from '../components/MyTrainingItem';
import * as trainingsAction from '../store/action/trainings';

const MyTrainingScreen = (props) => {
   const dispatch = useDispatch()
   const trainings = useSelector(state => state.trainings.userTrainings);

   useEffect(() => {
     dispatch(trainingsAction.fetchMyTrainings());
   }, [dispatch]);


   if (trainings.length === 0) {
    return ( <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>No trainings found</Text>
    </View>
    );
  }

   return (
    <FlatList
      data={trainings}
      keyExtractor={item => item.trainingId}
      renderItem={itemData => (
        <MyTrainingItem
          date={itemData.item.date}
          onViewDetail={() => {
            props.navigation.navigate('MyExercise', {trainingId: itemData.item.trainingId, userId: itemData.item.userId });
          }}
        />       
      )}
    />
  );
};

MyTrainingScreen.navigationOptions = navData => {
  return {
  headerTitle: 'My Trainings',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      title="Menu"
      iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
      onPress={() => {
      navData.navigation.toggleDrawer();
      }}
    />
  </HeaderButtons>
  )
 };  
};


export default MyTrainingScreen;

