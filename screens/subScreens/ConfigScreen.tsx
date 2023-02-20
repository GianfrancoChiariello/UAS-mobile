import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import ConfigC from '../../components/Config/ConfigC'

export default function ConfigScreen() {
  return (
    <View style={{
        marginTop: StatusBar.currentHeight,
    }}>
        <ConfigC />
    </View>
  )
}