import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    View: {
        backgroundColor: 'greenyellow',
        alignItems: 'center',
    },
    Text: {
        color: 'black',
    }
});

export default function Gilbeh() {
    return(
        <View style={styles.View}>
            <Text style={styles.Text}>gilbyyyyy</Text>
        </View>
    );
}
