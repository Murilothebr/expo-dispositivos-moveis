import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, Alert } from 'react-native';

export default function Login() {
    const [username, onChangeText] = React.useState('');
    const [password, onChangeNumber] = React.useState('');
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={username}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={password}
        placeholder="password"  
        secureTextEntry={true}
      />

      <Button
        title="Aqui !"
        onPress={() => console.log("username = " + username + " senha = " + password)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
