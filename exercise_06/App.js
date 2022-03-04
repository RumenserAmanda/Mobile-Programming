import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native'
import Friendlyyyyy from './components/Friendly';

const style = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App(){
  const [state, setState] = useState({
    Friendly: {
      name: 'Friendly',
      bio: 'I like to think that i could die at any given moment',
      age: 20,
    }
  });

  return(
    <View>
      <Friendlyyyyy props={state.Friendly} />
    </View>
  )
}