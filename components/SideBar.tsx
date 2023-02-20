import { View, Text,Image,StyleSheet,TouchableOpacity,DrawerLayoutAndroid, StatusBar,ImageBackground, Alert  } from 'react-native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import {
    useHistory,
    useLocation
} from 'react-router-native'
import { useLanguage } from '../hooks/useLanguage';
import AsyncStorage from '@react-native-async-storage/async-storage';



const style = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        margin: 10,
        position: 'relative',
        marginTop: StatusBar.currentHeight + 10,
    },
    subnav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }, 
    image: {
        width: 200,
        height: 70,
        marginLeft: 10,
        cover: 'contain',
    },
    icon: {
        marginRight: 10,
        color: 'gray'
    },
    backgroundImage: {
        width: '100%',
        flex: 1,
        resizeMode: 'cover',
    },
    logoNavbar: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    items: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    containerItems: {
        marginTop: 60,
        color: 'white',
    },
    textItems: {
        marginLeft: 10,
        fontSize: 15,
        color: 'white',
        fontWeight: '500',
    },
    iconTainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        opacity: 0.8,
    },
    toper: {
        marginTop: StatusBar.currentHeight,
    },
    subnaver: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    icon2: {
        marginLeft: 10,
    }
})



export default function SideBar({children}) {

    const history = useHistory()
    const lang = useLanguage()


    const drawerRef = React.useRef(null);

    const openDrawer = () => {
        drawerRef.current.openDrawer();
    };
    

    const logout = () => {
        AsyncStorage.removeItem('welcome')
        setTimeout(() => {history.push('/')}, 1000)
        Alert.alert("Logout", lang.logoutSucess)
    }

    const rutas = [
        {
            name: lang.accesos,
            icon: 'unlock',
            route: 'access',
            action: null
        },
        {
            name: lang.accesosSpecial,
            icon: 'unlock',
            route: 'specialAccess',
            action: null
        },
        {
            name: lang.equipo,
            icon: 'users',
            route: 'equipment',
            action: null
        },
        {
            name: lang.request,
            icon: 'question',
            route: 'request',
            action: null
        },
        {
            name: lang.consif,
            icon: 'gear',
            route: 'config',
            action: null
        },
        {
            name: lang.logout,
            icon: 'home',
            route: '/',
            action: logout
        }
    ]
    

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={270}
      drawerPosition={'left'}
      renderNavigationView={() => (
        <ImageBackground 
            source={require('../assets/images/background.png')}
            style={style.backgroundImage}>
            <View>
                
                <View style={style.logoNavbar}>
                    <Image source={require('../assets/images/logo.png')} style={style.image} />
                </View>

                <View style={style.containerItems}>
                    {
                        rutas.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => {
                                    item.icon !== 'home' ? history.push(`/${item.route}`) : null
                                    item.action && item.action()
                                }} style={style.items}>
                                    <View style={style.iconTainer}>
                                        <AwesomeIcon name={item.icon} size={22} color="white" />
                                    </View>
                                    <Text style={style.textItems} >{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

            </View>
        </ImageBackground>
      )}
    >
      
    <View style={style.nav}>
        <View style={style.subnaver}>
            <View style={style.subnav}>
                <TouchableOpacity onPress={openDrawer}>
                    <AwesomeIcon name="bars" size={23} color="gray" style={style.icon2}/>
                </TouchableOpacity>
            </View>
            <AwesomeIcon name="bell" size={30} color="black"  style={style.icon} />
        </View>
    </View>

        {children}

    </DrawerLayoutAndroid>
  )
}