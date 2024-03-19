import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import Login from './src/components/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 312,
    height: 400,
    marginTop: 100,
  },
});
