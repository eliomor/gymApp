import  React,  { useEffect, useState } from 'react';
import { View, Text, Platform, StyleSheet, ScrollView, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';
import * as dietsAction from '../store/action/diets';
import Colors from '../constants/Colors';

const MyDietScreen = (props) => {
  const dispatch = useDispatch()
  const loginUser = useSelector(state => state.users.loginUser);
  const userId = useSelector(state => state.auth.userId);
  const dietExists = useSelector(state =>state.diets.allDiets.find(diet => diet.userId === userId));

useEffect(() => {
  dispatch(dietsAction.fetchDiets(userId));
}, [dispatch,userId]);

return (
      <ScrollView>
          <Text style={styles.title}><Text>Name: </Text>{loginUser.name}</Text>
          <Text style={styles.description}><Text>Breakfast: </Text>{dietExists ? dietExists.breakfast : ''}</Text>
          <Text style={styles.description}><Text>Lunch: </Text>{dietExists ? dietExists.lunch : ''}</Text>
          <Text style={styles.description}><Text>Dinner: </Text>{dietExists ? dietExists.dinner : ''}</Text>
          <Text style={styles.description}><Text>Snacks: </Text>{dietExists ? dietExists.snacks : ''}</Text>
    </ScrollView>
    );
};


MyDietScreen.navigationOptions = navData => {
  return {
  headerTitle: 'My Diet',
  headerLeft: () => (
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

export default MyDietScreen;

