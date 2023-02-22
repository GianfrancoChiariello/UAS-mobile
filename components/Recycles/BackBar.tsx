import { View, Text } from 'react-native'
import React from 'react'
import { useHistory } from 'react-router-native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import {useStyles} from '../../hooks/useStyles'

export default function BackBar({text, background, height,color}) {
    const history = useHistory()
    const style = useStyles()

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
        <AwesomeIcon name="arrow-left" style={{color: {color}, paddingRight: 5,paddingVertical: 10}} size={20} onPress={() => {
            history.goBack()
        }} />
        <View style={style.backBar.backBarText as never}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
            }}>{text}</Text>
        </View>
    </View>
  )
}