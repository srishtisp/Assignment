import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    
    const getRememberMe = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('user_email');
        const storedPassword = await AsyncStorage.getItem('user_password');
        const storedRememberMe = await AsyncStorage.getItem('remember_me');

        if (storedRememberMe === 'true') {
          setRememberMe(true);
          setEmail(storedEmail || ''); 
          setPassword(storedPassword || '');
        }
      } catch (error) {
        console.error('Error retrieving remember me data');
      }
    };

    getRememberMe();
  }, []);

  const handleLogin = async () => {
    
    try {
      const savedEmail = await AsyncStorage.getItem('user_email');
      const savedPassword = await AsyncStorage.getItem('user_password');

      if (savedEmail && savedPassword) {
        if (email === savedEmail && password === savedPassword) {
          if (rememberMe) {
            
            await AsyncStorage.setItem('remember_me', 'true');
          } else {
           
            await AsyncStorage.removeItem('remember_me');
          }
          Alert.alert('Login Successful');
          navigation.navigate('Home');
        } else {
          Alert.alert('Invalid email or password');
        }
      } else {
        Alert.alert('No user found. Please sign up first.');
      }
    } catch (error) {
      Alert.alert('Error retrieving data');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.checkboxContainer}>
          <Text>Remember Me</Text>
          <Switch value={rememberMe} onValueChange={setRememberMe} />
        </View>

        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  contentBox: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  heading: {
    fontSize: 30,
    fontFamily: 'Times New Roman',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    fontFamily: 'Times New Roman',
    backgroundColor: '#FFFFFF', 
  },
  checkboxContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default LoginScreen;
