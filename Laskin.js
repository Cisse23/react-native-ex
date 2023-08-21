import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function Laskin() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState("");

  const buttonPressedAdd = () => {
    setResult((num1+num2));
  }

  const buttonPressedSubtract = () => {
    setResult((num1-num2));
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
            
            <Text style={styles.title}>Laskin</Text>
            
            <TextInput style={styles.numberInput} keyboardType='numeric'
                onChangeText={num1 => setNum1(Number(num1))} 
                value={num1} 
            />

            <View style={styles.containerButtons}>
                <Button title="+" onPress={buttonPressedAdd}></Button>
                <Button title="-" onPress={buttonPressedSubtract}></Button>
            </View>

            <TextInput style={styles.numberInput} keyboardType='numeric'
                onChangeText={num2 => setNum2(Number(num2))} 
                value={num2} 
            />

            <Text style={styles.title}>
                = {result}
            </Text>

      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10
  },
  containerButtons: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  numberInput: {
    width: 100, 
    borderColor: 'gray', 
    borderWidth: 1,
    
  },
});