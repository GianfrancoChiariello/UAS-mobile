import { View, Text } from 'react-native'
import React from 'react'
import { useHistory } from 'react-router-native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5'

export default function BackBar({text, background, height}) {
    const history = useHistory()

  return (
    <View style={{
        width: '100%',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: background,
        height: height,
    }}>
        <AwesomeIcon name="arrow-left" size={20} onPress={() => {
            history.goBack()
        }} />
        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 120,
        }}>{text}</Text>
    </View>
  )
}