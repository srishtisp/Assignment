import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type PasswordStrengthMeterProps = {
  strength: number;  // strength is the value from 0 to 4
};

const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({ strength }) => {
  const getStrengthMessage = () => {
    switch (strength) {
      case 0:
        return 'Very Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Medium';
      case 3:
        return 'Strong';
      case 4:
        return 'Very Strong';
      default:
        return '';
    }
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 0:
        return 'red';
      case 1:
        return 'orange';
      case 2:
        return 'yellow';
      case 3:
        return 'green';
      case 4:
        return 'green';
      default:
        return 'transparent';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.strengthText, { color: getStrengthColor() }]}>
        {getStrengthMessage()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  strengthText: {
    fontSize: 16,
  },
});

export default PasswordStrengthMeter;
