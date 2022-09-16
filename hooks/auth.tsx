import React, 
{ 
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    COLLECTION_USER
} from '../configs/storage';
import api from '../services/api'
import axios from 'axios';


type User = {
  id: string;
  name: string;
}

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);
      //TODO: implement sign in logic to get user data here
      // await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData));

      axios.get('/user?ID=12345') // encodeURI(this.baseApiUrl().concat('/usuarios/app/register')),
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      //APENAS PARA TESTES
      setUser({id: '12932', name: 'Homer Simpsons'});
    } catch {
      throw new Error('Não foi possível autenticar');
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(COLLECTION_USER);
  }

  async function loadUserStorageData() {
    const storedUser = await AsyncStorage.getItem(COLLECTION_USER);

    if(storedUser) {
      const userLogged = JSON.parse(storedUser) as User;
      //api.defaults.headers.authorization = `Bearer ${userLogged.token}`;
      setUser(userLogged);
    }
  }

  useEffect(()=> {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signIn,
      signOut
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}