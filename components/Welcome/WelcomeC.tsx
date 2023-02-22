import { View, Text,Image, ImageBackground, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import {useStyles} from '../../hooks/useStyles'
import {useLanguage} from '../../hooks/useLanguage'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {
  useHistory
} from "react-router-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

 
export default function WelcomeC() {
  const styles = useStyles()
  const lang = useLanguage()
  const history = useHistory();

  const setWelcome = async () => {
    await AsyncStorage.setItem('welcome', 'false')
  }
  
  return (
    <ImageBackground source={require('../../assets/images/background.png')} style={styles.ImageBackground}>
      <View style={styles.welcome.containerImage as never}>
        <Image source={require('../../assets/images/welcome.png')} />
      </View>
      <View style={styles.welcome.containerDad as never}>
      <View style={styles.welcome.textContainer}>
        <Text style={styles.welcome.text as never}>
          {lang.welcomeDesc}
        </Text>
      </View>
      <View style={styles.welcome.boxArrow as never}>
      <TouchableNativeFeedback onPress={() => {
        setWelcome()
        history.push('home')
      }}>
        <FontAwesome5 name="arrow-right" size={23} color="black" style={styles.welcome.icon} />
      </TouchableNativeFeedback>
      </View>
      </View>
      <TouchableNativeFeedback onPress={() => {
        setWelcome()
        history.push('home')
      }}>
        <View style={styles.welcome.feedbackBox as never}>
        <Text style={styles.welcome.textButton as never}>
          {lang.getStart}
        </Text>
        </View>
      </TouchableNativeFeedback>
    </ImageBackground>
  )
}