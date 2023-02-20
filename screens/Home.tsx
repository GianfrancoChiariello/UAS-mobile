import { View, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import RegionS from '../components/Home/RegionS'

export default function Home() {

  return (
    <ImageBackground 
      source={require('../assets/images/background.png')}
      style={styles.backgroundImage}>
      <View>
        <RegionS/>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
