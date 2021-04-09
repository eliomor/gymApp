import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/Colors';
import Card from '../components/UI/Card';

const UserItem = props => {
  return (
    
    <Card style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{props.name}</Text>
     </View>
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Edit Details"
          onPress={props.onEdit}
        />
        <Button
          color={Colors.primary}
          title="Edit Training"
          onPress={props.onEditTraining}
        />
        <Button
          color={Colors.primary}
          title="Edit Diet"
          onPress={props.onEditDiet}
        />
        <Button
          color={Colors.primary}
          title="Delete User"
          onPress={props.onDelete}
        />
       </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    margin: 20,
    flexDirection: 'row'
   },

  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10
  },
  title: {
    fontSize: 40,
    marginVertical: 4
  },
  actions: {
    flexDirection: 'column',
    padding: 10,
    paddingHorizontal: 10,
    padding: 10,
    marginHorizontal: 30,
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    fontFamily: 'open-sans-bold',
  }
});
export default UserItem;
