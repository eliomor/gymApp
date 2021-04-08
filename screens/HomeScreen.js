import  React,  { useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/UI/HeaderButton';
import * as usersAction from '../store/action/users';

const HomeScreen = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(usersAction.fetchUsers());
  }, [dispatch]);
  
return (
      <View style={styles.container}>
           <Text>Home Screen</Text>
      </View>
    );
}


HomeScreen.navigationOptions = navData => {
  return {
  headerTitle: 'Home',
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


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
    justifyContent: 'center'
   }
  }
);

export default HomeScreen;



