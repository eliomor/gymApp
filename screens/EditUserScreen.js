import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import * as usersAction from '../store/action/users';
import HeaderButton from '../components/UI/HeaderButton';

const EditUsersScreen = (props) => {
  const userId = props.navigation.getParam('userId');
  
  const userExists = useSelector(state =>
    state.users.availableUsers.find(user => user.userId === userId)
  );

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(usersAction.fetchUsers());
 }, [dispatch]);
 


  const [name,setName] = useState(userExists ? userExists.name : '');

  const submitHandler = useCallback(() => {
    dispatch(usersAction.updateUser(userId ,name));
    props.navigation.goBack();
  }, [dispatch,userId,name]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);


  return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior="height'"
  >  
    <ScrollView>
      <View style={styles.form}>      
        <View style={styles.formControl}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={text => setName(text)}
            autoCapitalize='sentences'
          />
        </View>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

    

EditUsersScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
  return {
    headerTitle: 'Edit User',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
          }
          onPress={submitFn}
        />
      </HeaderButtons>
    )
  };
};




const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: '100%'
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});

export default EditUsersScreen;

