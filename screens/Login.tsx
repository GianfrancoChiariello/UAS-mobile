import {ImageBackground, TouchableOpacity, StyleSheet,StatusBar } from 'react-native'
import React from 'react'
import Title from '../components/Login/Title'
import FormBox from '../components/Login/FormBox'
import {useLanguage} from '../hooks/useLanguage'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  useHistory
} from "react-router-native";




export default function Login() {
  const langg = useLanguage()
  const history = useHistory();

  const style = StyleSheet.create({
    arrowContainer: {
      padding: 10, 
      top: 0,
      left: 0,
      position: 'absolute',
      zIndex: 1,
      marginTop: StatusBar.currentHeight,
    },
    arrowIcon: {
      opacity: 0.8,
      color: '#fff',
      fontSize: 20,
    }
  })

  return (
    <ImageBackground 
    source={require('../assets/images/background.png')}
    style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <TouchableOpacity style={style.arrowContainer} onPress={() => {
          history.push('home')
        }}>
            <AwesomeIcon name="arrow-left" style={style.arrowIcon} />
        </TouchableOpacity>
        <Title langg={langg}/>
        <FormBox langg={langg}/>
    </ImageBackground>
  )
}