import  React,  { useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/UI/HeaderButton';

const EditTrainingScreen = (props) => {

return (
      <View style={styles.container}>
           <Text>Edit Training Screen</Text>
      </View>
    );
}


EditTrainingScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
  return {
    headerTitle: 'Edit Training',
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
  container: {
    flex: 1,
    alignItems: 'center',    
    justifyContent: 'center'
   }
  }
);

export default EditTrainingScreen;



