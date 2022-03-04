import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    View: {
        backgroundColor: 'pink',
        alignItems: 'center',
        margin: 15,
        padding: 5,
    },
    Text: {
        color: 'red',
    }
});

export default function Inces({props}) {
    return(
        <View style={styles.View}>
            <Text style={styles.Text}>My name is {props.name} and i'm  {props.age}. and also my bio for this semester is{props.bio} and {props.gender}</Text>
        </View>
    );
}
