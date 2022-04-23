import { View, ImageBackground, Image, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

export default function WelcomeScreen() {
  return (
    <ImageBackground style={styles.container} source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={require('../assets/logo-red.png')} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={[styles.placeholder, styles.redBox]} />
      <View style={[styles.placeholder, styles.blueBox]} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    position: 'absolute',
    top: 120,
    alignItems: 'center',
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  placeholder: {
    height: 70,
    width: '100%',
  },
  redBox: {
    backgroundColor: colors.primary,
  },
  blueBox: {
    backgroundColor: colors.secondary,
  },
});
