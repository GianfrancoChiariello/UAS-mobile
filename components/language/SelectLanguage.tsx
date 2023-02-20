import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-native';


const style = StyleSheet.create({
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: "60%",
    backgroundColor: "#D9D9D9",
    opacity: 0.75,
    borderRadius: 10,
  },
  imageContainer: {
    width: 45,
    height: 45,
    backgroundColor: 'black',
    borderRadius: 100,
    marginVertical: 7,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
    borderRadius: 100,
  }
})

export default function Language() {
  const dispatch = useDispatch();
  const history = useHistory();

  const changeLang = (item : any) => {
    dispatch({
      type: 'CHANGE_LANGUAGE',
      payload: item,
    });
  };

  //Esto porque el requiere no admite variables

  const images = {
    br: require('../../assets/images/br.png'),
    en: require('../../assets/images/en.png'),
    es: require('../../assets/images/es.png'),
  }
  
  return (
    <View style={style.viewContainer}>
      {
          ["br","en","es"].map((item, index) => (
              <TouchableOpacity key={index} onPress={() => {
                changeLang(item)
                history.push('login')
              }}>
                  <View style={style.imageContainer}
                  >
                      <Image 
                          source={images[item]}
                          style={style.image}
                      />
                  </View>
              </TouchableOpacity>
          ))
      }
  </View>
  )
}