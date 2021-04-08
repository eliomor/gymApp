import  React,  { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import UserItem from '../components/UserItem';
import HeaderButton from '../components/UI/HeaderButton';
import * as usersAction from '../store/action/users';

const UsersScreen = (props) => {
   const dispatch = useDispatch()

   useEffect(() => {
    dispatch(usersAction.fetchUsers());
  }, [dispatch]);


   const users = useSelector(state => state.users.availableUsers);
   return (
    <FlatList
      data={users}
      keyExtractor={item => item.userId}
      renderItem={itemData => (
        <UserItem
          name={itemData.item.name}
          onEdit={() => {
            props.navigation.navigate('EditUser', {userId: itemData.item.userId});
          }}
          onEditDiet={() => {
            props.navigation.navigate('EditDiet', {userId: itemData.item.userId});
          }}
          onDelete={() => {
            dispatch(usersAction.deleteUser(itemData.item.userId));
          }}
        />       
      )}
    />
  );
};


UsersScreen.navigationOptions = navData => {
  return {
  headerTitle: 'All Users',
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

export default UsersScreen;

