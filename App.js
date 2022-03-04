import React, { useState } from 'react';
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
  const [state, setState] = useState({
    gilby: {
      name: 'gilby',
      bio: 'i like banana.',
      age: 21,
    },
    nni_p_nama : {
      bio_ato_apa_kek_terserah: 'dpe isi',
    }
  });

  return (
    <View>
      <Gilbeh props={state.gilby}/>
      <Friendlyyyy />
      <Carlodinoooo />
      <Inces/>
    </View>
  );
}
