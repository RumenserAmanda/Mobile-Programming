import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  View: {
    backgroundColor: 'grey',
    alignItems: 'center',
    margin: 15,
    padding: 5,
    borderWidth: 1,
    borderColor: 'lime',
  },
  Text: {
    color: 'lime',
  },
});

export default function Gilby({props}) {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>'sup, I'm {props.fName} {props.lName}. {props.bio}</Text>
    </View>
  );
}
