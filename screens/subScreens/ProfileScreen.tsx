import { View, Text ,ImageBackground} from 'react-native'
import React from 'react'
import ProfileC from '../../components/Profile/ProfileC'

export default function ProfileScreen() {
  return (
    <ImageBackground 
    source={require('../../assets/images/background.png')}
    style={{
        width: '100%',
        height: '100%',
    }}>
      <ProfileC />
    </ImageBackground>

  )
}