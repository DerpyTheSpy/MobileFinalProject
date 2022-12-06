import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Text, View, StyleSheet, Button, SafeAreaView , Image, TextInput, FlashList, TouchableOpacity, ActivityIndicator} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Testing</Text>
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
