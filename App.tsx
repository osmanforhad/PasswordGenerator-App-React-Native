import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

//Form Validation
import * as Yup from 'yup';
//writing schema for password
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'password should be minum 4 char')
    .max(16, 'password should be max 16 char')
    .required('password is required')
});

export default function App() {

  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  /**
   * Method for Generate User input as
   * a Password String
   * @param passwordLength 
   */
  const generatedPasswordString = (passwordLength: number) => {
    let characterList = '';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*( )_+';

    if (uppercase) {
      characterList += uppercase;
    }
    if (lowercase) {
      characterList += lowercase;
    }
    if (numbers) {
      characterList += numbers;
    }
    if (symbols) {
      characterList += symbols;
    }

    const finalPassword = createPassword(characterList, passwordLength);
    setPassword(finalPassword);
    setIsPassGenerated(true);

  }

  /**
   * Method for creating password
   * @param characters 
   * @param passwordLength 
   */
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
    console.log("osman");
  }

  /**
   * Method for Password RESET
   * functionality
   */
  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})