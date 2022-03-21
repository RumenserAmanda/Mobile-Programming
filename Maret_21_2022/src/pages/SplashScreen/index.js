import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Logo from '../../assets/icons/logo.svg'; // sir pke svg dri figma

// poppins regular dan medium dari google fonts. font taru di 'android/app/src/main/assets/fonts'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#02CF8E',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
        fontFamily: 'Poppins-Regular',
    }
});

const SplashScreen = () => {
    return(
        <View style={styles.container}>
            <Logo />
            <Text style={styles.text}>Money Tracker</Text>
        </View>
    );
}

export default SplashScreen;
