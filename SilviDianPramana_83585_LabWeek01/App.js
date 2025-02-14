import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lathan1 from './Lathan1';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Silvi Dian Pramana - 00000083585</Text>
      <StatusBar style="auto" />

      <Lathan1/>
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
