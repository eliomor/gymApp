import * as React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../components/UI/HeaderButton';

const AboutScreen = (props) => {

return (
  <LinearGradient colors={['#D03B29','#FEFEDF']} style={styles.gradient}> 
      <View style={styles.container}>
           <Text>About Screen</Text>
      </View>
  </LinearGradient>
  );
}


AboutScreen.navigationOptions = navData => {
  return {
  headerTitle: 'About',
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
  container: {
    flex: 1,
    alignItems: 'center',    
    justifyContent: 'center'
   },
   gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  
  }
 }
);

export default AboutScreen;



