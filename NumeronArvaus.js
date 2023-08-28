import { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function NumeronArvaus(){
    const [randomNumber, setRandomNumber] = useState(0);
    const [guess, setGuess] = useState(0);
    const [result, setResult] = useState();

    function getRandomNumber(){
        setRandomNumber(Math.floor(Math.random() * 100 ) +1 );
        console.log("Random: " + randomNumber);
    }

    useEffect(getRandomNumber, []);

    function makeGuess(){
        if(guess == randomNumber){
            setResult("Arvasit oikein!")
            setGuess('');
        }
        else if (guess < randomNumber){
            setResult("Arvauksesi " + guess + " on liian pieni.");
            setGuess('');
        }
        else{
            setResult("Arvauksesi " + guess + " on liian suuri.");
            setGuess('');
        }
    }

    function resetGame(){
        setGuess('');
        setResult('');
        getRandomNumber();
    }

    return(
        <View>
            <Text style={styles.title}>
                Arvaa numero 1 - 100 väliltä
            </Text>
            <TextInput style={styles.numberInput} keyboardType='numeric'
                onChangeText={input => setGuess(Number(input))} 
                value={guess} 
            />
            <Button title="Tarkista" onPress={makeGuess}></Button>
            <Text>
                {result}
            </Text>
            <Button title='Reset' onPress={resetGame} />
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