import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  View: {
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 15,
    padding: 5,
    borderWidth: 5,
    borderColor: 'blue',
  },
  Text: {
    color: 'purple',
  },
});

export default function RyanM({props}) {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>
        My name is {props.name} and I'm {props.age}. {props.bio} my hobby is {props.Hobby}
      </Text>
    </View>
  );
}
