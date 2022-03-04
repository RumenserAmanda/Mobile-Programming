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
    color: 'red',
  },
});

export default function Carlodinoooo() {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>Carlodinoooo</Text>
    </View>
  );
}
