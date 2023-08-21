import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [text, setText] = useState("");

  const buttonPressed = () => {
    Alert.alert("Button pressed!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Hello!</Text>
        <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => setText(text)} 
          value={text} 
        />
        <Button title="Click!!" onPress={buttonPressed}></Button>

        <StatusBar style="auto" />
      </View>
      <View style={{flex: 2}}>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10
  },
});
