import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';

const SignUpScreen = ({ navigation }: any) => {
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const handleSignUp = async (values: any) => {
    try {
      
      await AsyncStorage.setItem('user_email', values.email);
      await AsyncStorage.setItem('user_password', values.password);

      Alert.alert('Sign Up Successful', 'You can now log in.', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (error) {
      Alert.alert('Error saving data');
      console.error('Signup error:', error);
    }
  };

  const handlePasswordChange = (password: string) => {
    
    const score = password.length > 8 ? 3 : password.length > 5 ? 2 : 1;
    setPasswordStrength(score);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.heading}>Sign Up</Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSignUp}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={values.password}
                onChangeText={(text) => {
                  handleChange('password')(text);
                  handlePasswordChange(text);
                }}
                onBlur={handleBlur('password')}
              />
              {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}
              <PasswordStrengthMeter strength={passwordStrength} />
              <Button title="Sign Up" onPress={handleSubmit} />
            </>
          )}
        </Formik>
        <Text style={styles.text}>Already have an account?</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ADD8E6',
    fontFamily: 'Times New Roman',
  },
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
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
    backgroundColor: '#FFFFFF',
    fontFamily: 'Times New Roman',
  },
  error: {
    color: 'red',
    marginBottom: 8,
    fontFamily: 'Times New Roman',
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
});

export default SignUpScreen;
