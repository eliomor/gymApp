import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/Colors';
import Card from './UI/Card';

const ScheduleItem = props => {
  return (
    
    <Card style={styles.container}>
    <View style={styles.topContainer}>
      <View style={styles.details}>
        <Text style={styles.title}>Date: {props.date}</Text>
        <Text style={styles.title}>Time: {props.time}</Text>
        <Text style={styles.title}>Details: {props.description}</Text>
      </View>
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Delete"
          onPress={props.onDelete}
        />
      </View>
    </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 170,
    width: 250,
    margin: 20
   },
   topContainer: {
    flexDirection: 'column'
   },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 4
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '75%',
    marginBottom: 110,

  }
});

export default ScheduleItem;
