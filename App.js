import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

//styling

export default function App() {
  const [state, setState] = useState({
    Email: 'default',
    Username: 'default',
    Password: 'default',
  });

  return (
    <View>
      <Text>
        Email: {`${state.Email} \n\n`}
        Username: {`${state.Username} \n\n`}
        Password: {`${state.Password} \n\n`}
      </Text>

      <TextInput
        onChangeText={val =>
          setState({
            Email: val !== '' ? val : 'default',
            Username: state.Username,
            Password: state.Password,
          })
        }
        placeholder="Enter email here"
        placeholderTextColor="grey"
      />

      <TextInput
        onChangeText={val =>
          setState({
            Email: state.Email,
            Username: val !== '' ? val : 'default',
            Password: state.Password,
          })
        }
        placeholder="Enter username here"
        placeholderTextColor="grey"
      />
    </View>
  );
}
