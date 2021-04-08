import * as React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';

const VideoScreen = (props) => {

return (
      <View style={styles.container}>
{/*           <View>
            <Input type="file" onChange={}/>
          </View>
           <Text>Video Screen</Text> */}
      </View>
    );
}


VideoScreen.navigationOptions = navData => {
  return {
  headerTitle: 'Video',
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

export default VideoScreen;



