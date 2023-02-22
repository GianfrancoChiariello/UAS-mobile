import {ImageBackground} from 'react-native'
import React from 'react'
import Title from '../components/Login/Title'
import FormBox from '../components/Login/FormBox'
import {useLanguage} from '../hooks/useLanguage'
import BackBar from '../components/Recycles/BackBar'




export default function Login() {
  const langg = useLanguage()


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
        <BackBar text='' background='transparent' height={60} color={'gray'} />
        <Title langg={langg}/>
        <FormBox langg={langg}/>
    </ImageBackground>
  )
}