import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  View: {
    backgroundColor: 'pink',
    alignItems: 'center',
    margin: 15,
    padding: 5,
    borderWidth: 5,
    borderColor: 'white',
  },
  Text: {
    color: 'black',
    alignItems: 'center',
  },
});

export default function Ketua({props}) {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>
        Holla I am {props.name}, I am one and only {props.gender} and now {props.age} years old still young right? and My
        hobby is {props.hobby}. Last, my Favorite Subject Is {props.favesubject}
      </Text>
    </View>
  );
}
