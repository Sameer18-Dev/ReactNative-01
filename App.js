import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [InitialText, UpdatedText] = useState('Some Random Text!!!');
  return (
    <View style={styles.container}>
      <Text>{InitialText}</Text>
      <Button title="Submit" onPress={() => UpdatedText('Text Updated!!!')} />
      <StatusBar style="auto" />
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
});
