import { StyleSheet, Image, View, SafeAreaView, StatusBar } from 'react-native';

import colors from '../config/colors';

export default function GalleryScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.gallery}>
          <View style={styles.actions}>
            <View style={[styles.placeholder, styles.closeButton]}></View>
            <View style={[styles.placeholder, styles.deleteButton]}></View>
          </View>
          <Image
            resizeMode="contain"
            style={styles.galleryImage}
            source={require('../assets/chair.jpg')}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.black,
  },
  gallery: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
  },
  actions: {
    position: 'absolute',
    top: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeholder: {
    height: 50,
    width: 50,
    marginHorizontal: 20,
  },
  closeButton: {
    backgroundColor: colors.primary,
  },
  deleteButton: {
    backgroundColor: colors.secondary,
  },
  galleryImage: {
    width: '100%',
    height: '70%',
  },
});
