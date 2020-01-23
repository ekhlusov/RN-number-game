import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="RESTART GAME" onPress={props.onRestart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
