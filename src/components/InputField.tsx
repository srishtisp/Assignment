import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  onBlur?: (e: any) => void;
  secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChangeText, error, secureTextEntry }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      accessible
      accessibilityLabel={label}
    />
    {error && <Text style={styles.error}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default InputField;
