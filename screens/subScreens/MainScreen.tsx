import {ImageBackground} from 'react-native'
import React from 'react'
import SideBar from '../../components/SideBar'
import MainC from '../../components/Main/MainC'



export default function MainScreen() {

  return (
    <ImageBackground 
      source={require('../../assets/images/background.png')}
      style={{    
        flex: 1,
        width: '101%',
        height: '100%',
      }}>
      <SideBar>
        <MainC/>
      </SideBar>
    </ImageBackground>
  )
}