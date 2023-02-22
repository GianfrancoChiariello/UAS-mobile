import { View,TextInput } from 'react-native'
import React from 'react'
import { List} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import {useStyles} from '../../hooks/useStyles'
import {useLanguage} from '../../hooks/useLanguage'
import {useStates} from '../../hooks/useStates';

export default function FieldChanged() {

    const style = useStyles()
    const lang = useLanguage()
    const {corps} = useStates()

    const [isVisible, setIsVisible] = useState(false)
    const [selectedCorp, setSelectedCorp] = useState('')
    const [iconOrion, setIconOrion] = useState('arrow-down')

    const results = () => {
        return corps.map((item : any) => { 
            return {
                name: item.name.toUpperCase(),
                id: item.id
            }
        }).filter((corps : any) => corps.name.includes(selectedCorp.toUpperCase()))
    }

    return (
        <View style={{
            width: '100%',
        }}>
            <TextInput
                placeholder={lang.fielCorp}
                style={style.formBox.input}
                onChangeText={(text) => {
                    setSelectedCorp(text)
                }}
                value={selectedCorp}
            />

            {
                selectedCorp.length > 0 && (
                    <AwesomeIcon name={iconOrion} style={style.formBox.fieldChanged.iconDrop}
                    size={20}
                    onPress={() => {
                        setIsVisible(!isVisible)
                        setIconOrion(isVisible ? 'arrow-down' : 'arrow-up')
                    }} 
                    />
                )
            }

            {
                isVisible ? (
                    <List.Section style={style.formBox.fieldChanged.listSection as never}>
                        {
                            results() && results().length > 0 ? (
                                results().map((item : any, key: any) => (
                                    <List.Item
                                        key={key}
                                        title={item.name}
                                        titleStyle={style.formBox.fieldChanged.titleStyle}
                                        onPress={() => {
                                            setSelectedCorp(item.name)
                                            setIsVisible(false)
                                        }}
                                    />
                                ))
                            ) : (
                                <List.Item
                                    title={lang.noMatches}
                                    titleStyle={style.formBox.fieldChanged.titleStyle}
                                />
                            )
                        }
                    </List.Section>
                ) : null
            }

        </View>
    )
}