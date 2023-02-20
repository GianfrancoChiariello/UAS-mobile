import { View, Text,StatusBar,Image} from 'react-native'
import { TextInput } from 'react-native-paper';
import React from 'react'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';
import { useHistory } from 'react-router-native';


export default function ProfileC() {

    const history = useHistory();

  return (
    <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.54)',
        paddingTop: StatusBar.currentHeight,
    }}>
      <View style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}>
        <AwesomeIcon name="arrow-left" size={20} color="black" onPress={() => history.push('main2')} />
      </View>

      <View style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
        backgroundColor: 'rgba(199, 203, 202, 0.87)',
        borderRadius: 50,
        width: 90,
        height: 90,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        }}>
            <Image source={require('../../assets/images/profile.png')}  style={{
                resizeMode: 'cover',
            }}/>
        </View>
        <Text style={{
            fontSize: 18,
            opacity: 0.5,
            fontWeight: 'bold',
            marginTop: 5,
        }}>Profile</Text>
        <Text style={{
            fontSize: 23,
            fontWeight: 'bold',
            opacity: 0.8,
            marginTop: 5,
        }}>Gianf Ch</Text>
      </View>


        <View style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 45,
        }}>

            <View style={{
                width: '85%',
            }}>
                <TextInput
                    label="App name"
                    value='example'
                    style={{
                        marginBottom: 20,
                        backgroundColor: 'transparent'
                    }}
                />

                <TextInput
                    label="App last name"
                    value='example'
                    style={{
                        marginBottom: 20,
                        backgroundColor: 'transparent'
                    }}
                />

                <TextInput
                    label="Birthday"
                    value='example'
                    style={{
                        marginBottom: 20,
                        backgroundColor: 'transparent'
                    }}
                />
            </View>

        </View>

        <View style={{
            width: '100%',
            paddingTop: 150,
            paddingHorizontal: 50,
        }}>
                <Button icon="cloud" mode="contained"  style={{
                    backgroundColor: 'rgba(35, 182, 138, 1)',
                }}>
                    Save changes
                </Button>
        </View>

    </View>
  )
}