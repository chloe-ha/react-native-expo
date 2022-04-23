import { StyleSheet, View } from 'react-native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import GalleryScreen from './src/screens/GalleryScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      <GalleryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
