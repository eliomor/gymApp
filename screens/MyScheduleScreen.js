import  React,  { useEffect, useCallback } from 'react';
import { View, Text, FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';
import MyScheduleItem from '../components/MyScheduleItem';
import * as schedulesAction from '../store/action/schedules';

const MyScheduleScreen = (props) => {
   const dispatch = useDispatch()
   const schedules = useSelector(state => state.schedules.userSchedules);

   useEffect(() => {
     dispatch(schedulesAction.fetchMySchedules());
   }, [dispatch]);


   if (schedules.length === 0) {
    return ( <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>No schedules found</Text>
    </View>
    );
  }

   return (
    <FlatList
      data={schedules}
      keyExtractor={item => item.schedulesId}
      renderItem={itemData => (
        <MyScheduleItem
          date={itemData.item.date}
          time={itemData.item.time}
          description={itemData.item.description}
        />       
      )}
    />
  );
};

MyScheduleScreen.navigationOptions = navData => {
  return {
  headerTitle: 'My Schedules',
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


export default MyScheduleScreen;

