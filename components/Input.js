import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Input = props => {
  return (
    <View>
      <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

export default Input;
