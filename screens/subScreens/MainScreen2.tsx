import {ImageBackground,View,Text,StatusBar,TouchableOpacity} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useHistory } from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLanguage } from '../../hooks/useLanguage';
import { Badge } from 'react-native-paper';






export default function MainScreen() {
    const history = useHistory();
    const langg = useLanguage();

    const shorts = [
        {
            type: 'personal',
            title: langg.shortCuts.personal,
            titleLarge: langg.shortCuts.personalLarge,
            description: langg.shortCuts.personalDescripion,
            icon: 'user',

        },
        {
            type: 'special',
            title: langg.shortCuts.special,
            titleLarge: langg.shortCuts.specialLarge,
            description: langg.shortCuts.specialDescripion,
            icon: 'keycdn',
        },
        {
            type: 'team',
            title: langg.shortCuts.team,
            titleLarge: langg.shortCuts.teamLarge,
            description: langg.shortCuts.teamDescripion,
            icon: 'users',
        },
        {
            type: 'request',
            title: langg.shortCuts.requestt,
            titleLarge: langg.shortCuts.requesttLarge,
            description: langg.shortCuts.requesttDescripion,
            icon: 'list'
        },
        {
            type: 'config',
            title: langg.shortCuts.config,
            titleLarge: langg.shortCuts.configLarge,
            description: langg.shortCuts.configDescripion,
            icon: 'cog'
        }
    ]

  return (
    <ImageBackground 
      source={require('../../assets/images/background.png')}
      style={{    
        flex: 1,
        width: '101%',
        height: '100%',
      }}>

        <View style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '88%',
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: StatusBar.currentHeight + 20,
                padding: 10,
                paddingHorizontal: 20,
                width: '100%',
            }}>
                <Text style={{
                    fontSize: 25    ,
                    fontWeight: 'bold',
                }}>Hi Gian,</Text>
                <View>
                <FontAwesome5 onPress={() => history.push('profile')} name="user-circle" size={24} color="black" />
                <Badge size={14} style={{
                    position: 'absolute',
                    top: -4,
                    right: -3,
                    backgroundColor: '#52A8B5',
                    borderWidth: 1,
                    color: '#fff',
                    opacity: 0.9,
                }}>2</Badge>
                </View>
            </View>

            <View style={{
                width: '100%',
                height: '80%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
            }}>
                <View style={{
                    width: '90%',
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        opacity: 0.6,
                    }}>
                        Shortcuts
                    </Text>
                </View>

                <View style={{
                    backgroundColor: '#FFFFFF',
                    opacity: 0.8,
                    width: '90%',
                    height: '90%',
                    display: 'flex',
                    borderRadius: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    paddingTop: 20,
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                    {
                        shorts.filter((item: any) => item.type !== 'config').map((item: any, key: any) => {
                            return (
                                <View key={key + item} style={{
                                    backgroundColor: '#52A8B5',
                                    width: 140,
                                    height: 140,
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    margin: 10,
                                    borderRadius: 20,
                                    paddingLeft: 10,
                                    paddingTop: 15,
                                }}>
                                    <FontAwesome5 name={item.icon} size={24} color="black"/>
                                    <Text style={{
                                        fontWeight: '500',
                                        opacity: 0.9,
                                    }}>
                                        {item.titleLarge}
                                    </Text>
                                    <Text style={{
                                        fontSize: 12,
                                        opacity: 0.6,
                                        width: '80%',
                                    }}>
                                        {item.description}
                                    </Text>
                                </View>
                            )
                        })
                    }
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: 40,
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '500',
                                opacity: 0.6,
                            }}>
                                Recent actions
                            </Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            {
                                [1,2,3,4,5].map((item: any) => {
                                    return (
                                        <View key={item} style={{
                                            backgroundColor: '#95C0C8',
                                            width: 52,
                                            height: 52,
                                            margin: 5,
                                            borderRadius: 50,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                        >
                                            {
                                                item === 1 ? <FontAwesome5 name="plus" size={24} color="black"  style={{
                                                    opacity: 0.7,
                                                }} onPress={() => {
                                                    history.push('/');
                                                }}/> : null
                                            }
                                            </View>
                                    )
                                })
                            }
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View style={{
                            //Span verde agua
                            backgroundColor: '#35BC94',
                            width: '35%',
                            height: 3,
                            margin: 17,
                            borderRadius: 20,
                        }}>
                            
                        </View>
                        </View>
                    </View>

                </View>

            </View>

            
        </View>

        <View style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 50,
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: 20,
                width: '90%',
            }}>
                {
                    shorts.map((item: any, key: any) => {
                        return (
                            <View key={key + item} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingVertical: 5,
                            }}>
                                <TouchableOpacity key={item} onPress={() => {
                                    item.type === 'config' ? history.push('config') : null
                                }}>
                                <View style={{
                                backgroundColor: '#95C0C8',
                                width: 50,
                                height: 50,
                                marginHorizontal: 5,
                                borderRadius: 50,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            >
                                <FontAwesome5 name={item.icon} size={24} color="black" style={{
                                    opacity: 0.5,
                                }}/>
                                </View>
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 10,
                                }}>
                                    {item.title}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>

    </ImageBackground>
  )
}