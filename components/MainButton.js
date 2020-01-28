import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../constants/theme';

const MainButton = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'open-sans',
    fontSize: 18
  }
});

export default MainButton;
