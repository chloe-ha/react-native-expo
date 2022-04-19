import { View, Image, StyleSheet, Text } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../../assets/background.jpg')} />
      <View style={styles.logo}>
        <Image style={styles.logoImage} source={require('../../assets/logo-red.png')} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.actions}>
        <View style={[styles.placeholder, styles.redBox]} />
        <View style={[styles.placeholder, styles.blueBox]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    paddingTop: 120,
    alignItems: 'center',
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  actions: {
    width: '100%',
  },
  placeholder: {
    height: 60,
    width: '100%',
    bottom: 0,
  },
  redBox: {
    backgroundColor: 'pink',
  },
  blueBox: {
    backgroundColor: 'blue',
  },
});
