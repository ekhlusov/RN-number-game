import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import theme from '../constants/theme';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/success.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.resultContainer}>
        <Text>Game Over!</Text>
        <Text>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess <Text style={styles.highlight}>{props.userNumber}</Text>
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="RESTART GAME" onPress={props.onRestart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#000',
    overflow: 'hidden',
    margin: 30
  },
  highlight: {
    color: theme.colors.primary,
    fontFamily: 'open-sans-bold',
    fontSize: 20
  },
  resultContainer: {
    width: '80%',
    textAlign: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
