import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import Friendlyyyy from './components/Friendly';
import Gilbeh from './components/Gilbeh';
import Carlodinoooo from './components/Carlodino';
import Inces from './components/Inces';
import Poco from './components/Poco';

const style = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [state, setState] = useState({
    gilby: {
      name: 'gilby',
      bio: 'i like banana.',
      age: 21,
    },
    Friendly : {
      name: 'Friendly',
      bio: 'I like to think that i could die at any moment',
      age: 20,
    }
  });

  return (
    <View>
      <Gilbeh props={state.gilby}/>
      <Friendlyyyy props={state.Friendly} />
      <Carlodinoooo />
      <Inces/>
      <Poco/>
    </View>
  );
}
