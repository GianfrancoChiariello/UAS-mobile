import { ScrollView,View, Text, TouchableOpacity,Linking } from 'react-native'
import React from 'react'
import BackBar from '../Recycles/BackBar'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5'

export default function ConfigC() {
  
    const PrimaryConfigItems = [
        {
            title: 'My corporation',
            icon: 'city',
            action: null
        },
        {
            title: 'My reports',
            icon: 'bullhorn',
            action: null
        },
        {
            title: 'Change language',
            icon: 'language',
            action: null
        },
        {
            title: 'Valorate app',
            icon: 'star',
            action: () => {
                Linking.openURL('https://play.google.com/store/apps/details?id=com.pentass.uas')
            }
        }
    ]

    const SecondaryConfigItems = [
        {
            title: 'UAS Version',
            icon: 'code',
        },
        {
            title: 'About UAS',
            icon: 'question',
        }
    ]
  
    return (
    <View>
      <BackBar text='Configuration' background='white' height={60} color={'black'} />
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(221, 221, 221, 0.96)',
      }}>

      <View style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
      }}>
        {
            PrimaryConfigItems.map((item, index) => {
                return (
                    <TouchableOpacity key={index} onPress={() => {item.action !== null ? item.action() : null}}>
                        <View style={{
                            width: '95%',
                            height: 60,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            marginTop: 22,
                            borderRadius: 20,
                        }}>
                                <AwesomeIcon name={item.icon} size={20} style={{
                                    marginLeft: 20,
                                    color: 'rgba(161, 213, 197, 1)',
                                }} />
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                    marginLeft: 20,
                                    opacity: 0.6,
                                }}>{item.title}</Text>
                                <AwesomeIcon name="chevron-right" size={20} style={{
                                    marginLeft: 'auto',
                                    marginRight: 20,
                                    opacity: 0.6,
                                }} />
                        </View>
                    </TouchableOpacity>
                )
            })
            }

            <View style={{
                width: '80%',
                height: 4,
                backgroundColor: 'rgba(161, 213, 197, 1)',
                marginVertical: 50,
                opacity: 0.6,
            }}></View>


            {
            SecondaryConfigItems.map((item, index) => {
                return (

                    <TouchableOpacity key={index}>
                        <View key={index} style={{
                            width: '95%',
                            height: 60,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderRadius: 20,
                            marginBottom: 22,
                        }}>
                                <AwesomeIcon name={item.icon} size={20} style={{
                                    marginLeft: 20,
                                    color: 'rgba(161, 213, 197, 1)',
                                }} />
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '500',
                                    marginLeft: 20,
                                    opacity: 0.6,
                                }}>{item.title}</Text>
                                <AwesomeIcon name="chevron-right" size={20} style={{
                                    marginLeft: 'auto',
                                    marginRight: 20,
                                    opacity: 0.6,
                                }} />
                        </View>
                    </TouchableOpacity>
                )
            })
            }
            <View style={{
                alignItems: 'center',
            }}>
                <Text>
                    UAS Version 1.0.1
                </Text>
                <Text>
                    Powered by Penta Security U.A.S
                </Text>
            </View>
      
      </View>

      </View>
    </View>
  )
}