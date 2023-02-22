import { View, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import {useLanguage} from '../../hooks/useLanguage'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useStyles} from '../../hooks/useStyles'

export default function Box() {
  
  const lang = useLanguage()
  const styles = useStyles()
  
  const options = [
    {
        name: lang.accesos,
        icon: 'unlock',
        route: 'access',
        action: null
    },
    {
        name: lang.accesosSpecial,
        icon: 'unlock',
        route: 'specialAccess',
        action: null
    },
    {
        name: lang.equipo,
        icon: 'users',
        route: 'equipment',
        action: null
    },
    {
        name: lang.request,
        icon: 'question',
        route: 'request',
        action: null
    },
]
  
    return (
    <View style={styles.MainC.mainBox as never}>
        <View style={styles.MainC.Box as never}>
            {
            options.map((option, index) => {
                return (
                    <TouchableNativeFeedback key={index}>
                        <View style={styles.MainC.options as never}>
                            <FontAwesome name={option.icon} size={20} color="#000" />
                            <View style={styles.MainC.text2Container as never}>
                                <Text style={styles.MainC.text as never}>{option.name}</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                )
            })
        }
        <View style={styles.MainC.span as never}></View>
        </View>
    </View>
  )
}