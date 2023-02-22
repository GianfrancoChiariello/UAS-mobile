import { View, Text, TouchableOpacity,Image, TextInput } from 'react-native'
import React from 'react'
import {useStyles} from '../../hooks/useStyles'
import {useHistory} from 'react-router-native'
import FieldChanged from './FieldChanged';

const images = {
    google: require('../../assets/images/google.png'),
    facebook: require('../../assets/images/facebook.png'),
    apple: require('../../assets/images/apple.png'),
}

export default function FormBox({langg}) {
    const history = useHistory()
    const styles = useStyles()
    
    return (
    <View style={styles.formBox as never}>
        
        <TextInput 
            placeholder={langg.fielEmail}
            style={styles.formBox.input}
        />
        
        <FieldChanged/>
        
        <Text style={styles.formBox.textForgot as never}>
            {langg.forgotPass}
        </Text>
        
        <TouchableOpacity style={styles.formBox.button} onPress={() => history.push('main2')}>
            <Text style={{color: "#fff", fontSize: 16, textAlign: 'center', fontWeight: '500'}}>
                {langg.register}
            </Text>
        </TouchableOpacity>
    
        <View style={styles.formBox.orSign as never}>
            <View style={styles.formBox.spans}></View>
            <Text style={styles.formBox.textOr}>
                {langg.altLogin}
            </Text>
            <View style={styles.formBox.spans}></View>
        </View>
        
        <View style={styles.formBox.social as never}>
            {
                ["google","facebook","apple"].map((item, index) => (
                    <TouchableOpacity key={index}>
                        <Image 
                            source={images[item]} 
                            style={styles.formBox.image as never}  
                        />
                    </TouchableOpacity>
                ))
            }
        </View>
    
    </View>
  )
}

