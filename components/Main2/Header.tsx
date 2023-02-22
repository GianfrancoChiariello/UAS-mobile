import { View, Text } from 'react-native'
import { Badge } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'

export default function Header({style,history,lang}) {
  return (
    <View style={style.MainScreen2.headerMain}>
        <Text style={style.MainScreen2.headerMain.text}>{lang.hi} Gian,</Text>
            <View>
                <FontAwesome5 onPress={() => history.push('profile')} name="user-circle" size={24} color="black" style={{paddingLeft:10, paddingVertical: 5}} />
                <Badge size={14} style={style.MainScreen2.headerMain.badge}>2</Badge>
            </View>
    </View>
  )
}