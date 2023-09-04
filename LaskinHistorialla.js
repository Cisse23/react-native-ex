import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function Laskin() {

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();
  const [history, setHistory] = useState([]);

  const buttonPressedAdd = () => {
    setResult(Number(num1)+Number(num2));
    const historyText = `${num1} + ${num2} = ${Number(num1)+Number(num2)}`;
    setHistory([ ...history, historyText ]);
    //console.log(history);
  }

  const buttonPressedSubtract = () => {
    setResult(Number(num1)-Number(num2));
    const historyText = `${num1} - ${num2} = ${Number(num1)-Number(num2)}`;
    setHistory([...history, historyText]);
    //console.log(history);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
            
        <Text style={styles.title}>Laskin</Text>
            
        <TextInput style={styles.numberInput} keyboardType='numeric'
          onChangeText={num1 => {
            setNum1(num1);
            setResult("");
          }} 
          value={num1} 
        />

        <View style={styles.containerButtons}>
          <Button title="+" onPress={buttonPressedAdd}></Button>
          <Button title="-" onPress={buttonPressedSubtract}></Button>
        </View>

        <TextInput style={styles.numberInput} keyboardType='numeric'
          onChangeText={num2 => {
            setNum2(num2);
            setResult("");
          }} 
          value={num2} 
        />

        <Text style={styles.title}>
          {num1} + {num2} = {result}
        </Text>

        <FlatList  
          data={history}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) =>
            <Text>{item}</Text>
          }          
        />

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
    justifyContent: 'space-evenly',
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
  list: {

  },
});