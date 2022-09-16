/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import auth from '@react-native-firebase/auth';

// import { Container } from './styles';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const navigation = useNavigation() as StackNavigationProp<any>;
  // const { signIn } = useAuth();

  // function goToSignUp() {
  //     navigation.navigate('SignUp');
  // }

  // function goToForgotPassword() {
  //     navigation.navigate('ForgotPassword');
  // }

  const handleCreateUser = () => {

  }

  const handleSignInEmail = async () => {
     const { user } = await auth().signInWithEmailAndPassword(email, password);
     console.log('SIGNIN COM EMAIL:', email.toLowerCase(), '', password);

     console.log('usuario', user)

    //  setEmail('');
    //  setPassword('');
  };

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

        <TouchableOpacity onPress={handleSignInEmail} style={styles.buttonAdd}>
          <Text style={styles.btnTextCreate}>Criar Usuário</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Confira seus dados abaixo</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
