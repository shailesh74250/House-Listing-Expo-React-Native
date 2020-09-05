import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Settings = ({ navigation }) => (
  <View style={StyleSheet.container}>
    <Text>this is setting screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Settings;
