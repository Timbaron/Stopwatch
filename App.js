import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [bgcolor, setBgolor] = useState('lightblue');
  const changeColor = (color) => {
    setBgolor(color)
  }
  return (
    <View style={[styles.container, { backgroundColor: bgcolor }]}>
      <Text>Click the buttons to change color</Text>
      <View style={styles.buttons}>
        <Button title="Grey" onPress={() => changeColor('grey')} />
        {/* <Button title="purple" onPress={() => changeColor('purple')} />
      <Button title="pink" onPress={() => changeColor('pink')}/> */}
      </View>
      <View style={styles.buttons}>
        <Button title="purple" onPress={() => changeColor('purple')} />
      </View>
      <View style={styles.buttons}>
        <Button title="Pink" onPress={() => changeColor('pink')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons:{
    marginBottom:10,
    alignItems:'center',
  }
});
