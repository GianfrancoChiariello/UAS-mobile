import { View, Text, Image } from 'react-native'
import React from 'react'
import { useHistory } from 'react-router-native'

export default function Title({langg}) {
  const history = useHistory();

  return (
    <>
      <Text style={{
            fontSize: 35,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 50,
            opacity: 0.6,
      }}
      onPress={() => {
        history.push('main2')
      }}
      >{langg.welcome}</Text>
        <Image source={require('../../assets/images/logoLog.png')} style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: 10,
        }} />
    </>
  )
}