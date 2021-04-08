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
    height: 130,
    margin: 20
   },

  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10
  },
  title: {
    fontSize: 30,
    marginVertical: 4
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 10
  }
});
export default UserItem;
