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
  const [numbers, useNumbers] = useState(false);
  const [symbols, useSymbols] = useState(false);

  /**
   * Method for Generate User input as
   * a Password String
   * @param passwordLength 
   */
  const generatedPasswordString = (passwordLength: number) => {
    //
  }

  /**
   * Method for creating password
   * @param characters 
   * @param passwordLength 
   */
  const createPassword = (characters: string, passwordLength: number) => {
    //
  }

  /**
   * Method for Password RESET
   * functionality
   */
  const resetPasswordState = () => {
    //
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})