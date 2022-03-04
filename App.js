import React from 'react';
import {StyleSheet, View} from 'react-native';
import Friendlyyyy from './components/Friendly';
import Gilbeh from './components/Gilbeh';
import Carlodinoooo from './components/Carlodino';
import Inces from './components/Inces';

const style = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View>
      <Gilbeh />
      <Friendlyyyy />
      <Carlodinoooo />
      <Inces/>
    </View>
  );
}
