import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  View: {
    backgroundColor: 'black',
    alignItems: 'center',
    margin: 15,
    padding: 5,
    borderWidth: 5,
    borderColor: 'red',
  },
  Text: {
    color: 'white',
    alignItems: 'center',
  },
});

export default function Carlodinoooo({props}) {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>
        Hallo, My name is {props.name},I'm {props.gender} and i'm {props.age}.My
        hobby is {props.hobby}
      </Text>
    </View>
  );
}
