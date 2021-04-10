import  React,  { useEffect } from 'react';
import { View, Text, Platform, StyleSheet, ScrollView, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';
import * as usersAction from '../store/action/users';
import Colors from '../constants/Colors';

const MyProfileScreen = (props) => {
  const dispatch = useDispatch()
  const loginUser = useSelector(state => state.users.loginUser);
  const userId = useSelector(state => state.auth.userId);

  useEffect(() => {
   dispatch(usersAction.fetchUsers());
 }, [dispatch]);
return (
      <ScrollView>
          <Text style={styles.title}><Text>Name: </Text>{loginUser.name}</Text>
          <Text style={styles.description}><Text>Phone: </Text>{loginUser.phone}</Text>
          <Text style={styles.description}><Text>Age: </Text>{loginUser.age}</Text>
          <Text style={styles.description}><Text>Weight: </Text>{loginUser.weight}</Text>
          <Text style={styles.description}><Text>Height: </Text>{loginUser.height}</Text>
          <Text style={styles.description}><Text>BMI: </Text>{loginUser.BMI}</Text>
          <Text style={styles.description}><Text>Scope: </Text>{loginUser.scope}</Text>
          <Text style={styles.description}><Text>Fat: </Text>{loginUser.fat}</Text>
          <View style={styles.actions}>
            <Button color={Colors.primary} title="Edit Details" onPress={() => { props.navigation.navigate('EditUser', {userId: userId})} } />
          </View>
    </ScrollView>
    );
};


MyProfileScreen.navigationOptions = navData => {
  return {
  headerTitle: 'My Profile',
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

export default MyProfileScreen;

