import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})