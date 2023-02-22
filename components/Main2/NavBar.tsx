import {View,Text,TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

export default function NavBar({style,history,shorts}) {
  return (
    <View style={style.MainScreen2.Navbar.container}>
    {
        shorts.map((item: any, key: any) => {
            return (
                <View key={key + item} style={style.MainScreen2.Navbar.container.item}>
                    <TouchableOpacity key={item} onPress={() => {
                        item.type === 'config' ? history.push('config') : null
                    }}>
                    <View style={style.MainScreen2.Navbar.container.item.iconContainer}
                >
                    <FontAwesome5 name={item.icon} size={24} color="black" style={style.MainScreen2.Navbar.container.item.iconContainer.icon}/>
                    </View>
                    </TouchableOpacity>
                    <Text style={style.MainScreen2.Navbar.container.item.iconContainer.text}>
                        {item.title}
                    </Text>
                </View>
            )
        })
    }
</View>
  )
}