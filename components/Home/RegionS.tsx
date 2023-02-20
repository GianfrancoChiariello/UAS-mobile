import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {useLanguage} from '../../hooks/useLanguage'
import Language from '../language/SelectLanguage'



export default function RegionS() {

    const langg = useLanguage()
    
  return (
    <View> 
        <View>
            <Image 
                source={require('../../assets/images/logo.png')} 
                style={{
                    width: 200, 
                    height: 80,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    marginTop: 180,
                }} 
            />
                <Text style={{color: '#fff', fontSize: 16, textAlign: 'center'}}>
                    {langg.selectLang}
                </Text>
        </View>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 280,
        }}>
            <Language/>
        </View>
    </View>
  )
}