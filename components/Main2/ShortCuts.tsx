import {ImageBackground,View,Text,StatusBar,TouchableOpacity} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';


export default function ShortCuts({style,history,shorts}) {
  return (
    <View style={style.MainScreen2.MainBoxShortcuts}>
    <View style={style.MainScreen2.MainBoxShortcuts.subBox}>
        <Text style={style.MainScreen2.MainBoxShortcuts.textShowtcuts}>
            Shortcuts
        </Text>
    </View>

    <View style={style.MainScreen2.MainBoxShortcuts.containerShorts}>
        <View style={style.MainScreen2.MainBoxShortcuts.subContainerShorts}>
        {
            shorts.filter((item: any) => item.type !== 'config').map((item: any, key: any) => {
                return (
                    <TouchableOpacity key={key + item}>
                        <View style={style.MainScreen2.MainBoxShortcuts.MapBox}>
                            <FontAwesome5 name={item.icon} size={24} color="black"/>
                            <Text style={style.MainScreen2.MainBoxShortcuts.MapBox.titleLarge}>
                                {item.titleLarge}
                            </Text>
                            <Text style={style.MainScreen2.MainBoxShortcuts.MapBox.description}>
                                {item.description}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            })
        }
        </View>

        <View style={style.MainScreen2.RecentActions}>
            <View>
                <Text style={style.MainScreen2.RecentActions.text}>
                    Recent actions
                </Text>
            </View>
            <View style={style.MainScreen2.RecentActions.slider}>
                {
                    [1,2,3,4,5].map((item: any) => {
                        return (
                            <View key={item} style={style.MainScreen2.RecentActions.slider.ItemsSliders}>
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
            <View style={style.MainScreen2.SpanContainer}>
            
            <View style={style.MainScreen2.SpanContainer.span}/>

            </View>
        </View>

    </View>

</View>
  )
}