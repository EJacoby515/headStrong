// File: app/(auth)/auth.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, router } from 'expo-router';
import { signIn, signUp, db} from '../src/utils/firebaseAuth';
import { doc, setDoc } from 'firebase/firestore';

const AuthPage: React.FC = () => {
  const { mode } = useLocalSearchParams<{ mode?: string }>();
  const [isLogin, setIsLogin] = useState(mode !== 'signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuth = async () => {
    try {
      setError('');

      if (!email || !password) {
        setError('Email and password are required.');
        return;
      }

      if (!isLogin && password !== confirmPassword) {
        setError("Passwords don't match");
        return;
      }

      if (!isLogin && !name) {
        setError("Name is required for sign up.");
        return;
      }

      if (isLogin) {
        await signIn(email, password);
      } else {
        const user = await signUp(email, password);
        // Create user document in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          name,
          email,
          createdAt: new Date().toISOString(),
        });
      }

      // If successful, navigate to the main app screen
      router.replace('/(main)/home');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        )}
        <TouchableOpacity style={styles.button} onPress={handleAuth}>
          <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleMode}>
          <Text style={styles.toggleText}>
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
      input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
      button: {
        backgroundColor: '#4a90e2',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      toggleText: {
        marginTop: 20,
        color: '#4a90e2',
        textAlign: 'center',
      },
      safeArea: {
        flex: 1,
        backgroundColor: '#f0f0f0',
      },
      error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
      },
});

export default AuthPage;