import {
  Alert,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  SafeAreaView,
  Image,
  View,
  Button,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';

export default function App() {
  const handlePress = (text) => console.log(`${text} pressed`);

  const containerBackground = { backgroundColor: 'orange' };

  console.log('wouwou', Dimensions.get('screen'));

  return (
    <SafeAreaView style={[styles.container, containerBackground]}>
      <StatusBar />
      <Text numberOfLines={1} onPress={() => handlePress('text')}>
        Hello world very very very very long oaoaosadasdasd asdasdadasdasdadasdasdad
        asdasdadasdasdad{' '}
      </Text>
      <Image style={styles.image} source={require('./assets/icon.png')} />
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        }}
      />
      <TouchableNativeFeedback onPress={() => handlePress('image')}>
        <View style={styles.touchableView} />
      </TouchableNativeFeedback>
      <Button
        color="green"
        title="Click me"
        // onPress={() => handlePress('button')}
        // onPress={() =>
        //   Alert.alert('My title', 'My message', [
        //     { text: 'Yes', onPress: () => handlePress('Yes') },
        //     { text: 'No', onPress: () => handlePress('No') },
        //   ])
        // }
        onPress={() => Alert.prompt('My title', 'My message', (text) => handlePress(text))}
      />
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: '100%',
          height: '30%',
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  image: {
    width: 200,
    height: 100,
  },
  touchableView: {
    width: 200,
    height: 70,
    backgroundColor: 'blue',
  },
});
