import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const { landscape } = useDeviceOrientation();

  const containerBackground = { backgroundColor: 'orange' };

  return (
    <SafeAreaView style={[styles.container, containerBackground]}>
      <View style={[styles.orientationView, { height: landscape ? '100%' : '30%' }]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  orientationView: {
    backgroundColor: 'dodgerblue',
    width: '100%',
  },
});
