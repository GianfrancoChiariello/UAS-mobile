import { View, Text } from 'react-native'
import React from 'react'
import { useHistory } from 'react-router-native';
import {useLanguage} from '../../hooks/useLanguage'
import {useStyles} from '../../hooks/useStyles' 
import Box from './Box'




export default function MainC() {
    const styles =  useStyles()


  return (
    <View style={styles.MainC.container as never}>
      <View style={styles.MainC.subContainer}>
        <Box />
      </View>
    </View>
  )
}