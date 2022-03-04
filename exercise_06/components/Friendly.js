import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  View: {
    backgroundColor: 'black',
    alignItems: 'center',
    margin: 15,
    padding: 5,
    borderWidth: 5,
    borderColor: 'green',
  },
  Text: {
    color: 'greenyellow',
  },
});

export default function Friendlyyyyy({props}) {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>
        My name is {props.name} and I'm {props.age}. {props.bio}
      </Text>
    </View>
  );
}
