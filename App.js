import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SplashScreen, SignIn, SignUp} from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';

const styles = StyleSheet.create({});

const App = () => {
  return (
    <NavigationContainer>
        <Router/>
    </NavigationContainer>
  );
};

export default App;
