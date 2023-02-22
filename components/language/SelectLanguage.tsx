import { View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-native';
import {changeLang} from '../../src/redux/action'
import {useStyles} from '../../hooks/useStyles'



export default function Language() {
  const dispatch = useDispatch();
  const history = useHistory();
  const style = useStyles()

  const images = {
    br: require('../../assets/images/br.png'),
    en: require('../../assets/images/en.png'),
    es: require('../../assets/images/es.png'),
  }
  
  return (
    <View style={style.selectLanguage.viewContainer as never}>
      {
          ["br","en","es"].map((item, index) => (
              <TouchableOpacity key={index} onPress={() => {
                dispatch<any>(changeLang(item))
                history.push('login')
              }}>
                  <View style={style.selectLanguage.imageContainer as never}
                  >
                      <Image 
                          source={images[item]}
                          style={style.selectLanguage.image as never}
                      />
                  </View>
              </TouchableOpacity>
          ))
      }
  </View>
  )
}