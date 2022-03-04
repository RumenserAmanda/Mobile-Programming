import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const styles = StyleSheet.create({
    View: {
        backgroundColor: 'greenyellow',
        alignItems: 'center',
        margin: 15,
        padding: 5,
    },
    Text: {
        color: 'black',
    }
});

export default function Gilbeh({props}) {
    return(
        <View style={styles.View}>
            <Text style={styles.Text}>My name is {props.name} and i'm  {props.age}. {props.bio}</Text>
        </View>
    );
}
