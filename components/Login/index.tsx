/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import  auth  from '@react-native-firebase/auth';

import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAQ-_qfCG4OdXkOrkgFWuDtW3B4rahhSyo",
  authDomain: "testeSignIn.firebaseapp.com",
  projectId: "myshopping-b3ed9",
  appId: "1:1087615673621:android:ef3e072aa63ff0e969f51c",
};

interface UserData {
  displayName?: string;
  email: string;
  emailVerified: false;
  metadata: {
    creationTime: number;
    lastSignInTime: number;
  };
  phoneNumber?: number;
  photoURL?: string;
  refreshToken?: string;
  uid: string;
}

const SignIn = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userEmail, setUserEmail] = useState<String>('');
  
  initializeApp(firebaseConfig,);


  // function goToSignUp() {
  //     navigation.navigate('SignUp');
  // }

  // function goToForgotPassword() {
  //     navigation.navigate('ForgotPassword');
  // }

  const handleCreateUser = () => {
    auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Dados do usuario', res)
        Alert.alert('Usuário Criado com sucesso! 😜');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });

    // Clear inputs
    setEmail('');
    setPassword('');  
  }

  const handleSignInEmail = async () => {
     const { user } = await auth().signInWithEmailAndPassword(email, password);
     console.log('SIGNIN COM EMAIL:', email.toLowerCase(), '', password);

     setUserEmail(user.email || '');

     setEmail('');
     setPassword('');
  };

  const getUsuarioDados = () => {
    // for (const property in usuario) {
    //   console.log(`${property}: ${usuario[property]}`);
    //   return setUserEmail(property)
    // }

    // setUserEmail(usuario.email)

  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Bem-vindo(a)</Text>
        </View>

        <View style={styles.fieldsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Email"
            onChangeText={setEmail}
            value={email.toLowerCase()}
          />
        </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Senha"
              style={styles.passwordInput}
              secureTextEntry
              onChangeText={setPassword}
            />
          </View>
        </View>

        <TouchableOpacity onPress={handleSignInEmail} style={styles.buttonSignIn}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCreateUser} style={styles.buttonAdd}>
          <Text style={styles.btnTextCreate}>Criar Usuário</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Confira seus dados abaixo</Text>
          </View>

          <Text style={styles.subtitle}>Email</Text>
          <Text style={styles.inputText}>{userEmail}</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
