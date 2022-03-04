import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  View: {
    backgroundColor: 'black',
    alignItems: 'center',
    margin: 15,
    padding: 5,
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
        My name is {props.name} and i'm {props.age}. {props.bio}
      </Text>
    </View>
  );
}
