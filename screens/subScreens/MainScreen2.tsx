import {ImageBackground,View} from 'react-native'
import { useHistory } from 'react-router-native';
import { useLanguage } from '../../hooks/useLanguage';
import {useStyles} from '../../hooks/useStyles'
import Header from '../../components/Main2/Header'
import ShortCuts from '../../components/Main2/ShortCuts'
import NavBar from '../../components/Main2/NavBar'


export default function MainScreen() {
    const history = useHistory();
    const langg = useLanguage();
    const style = useStyles();

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
      style={style.ImageBackground}>

        <View style={style.MainScreen2}>
            <Header history={history} style={style} lang={langg} />
            <ShortCuts history={history} style={style} shorts={shorts} />
        </View>

        <View style={style.MainScreen2.Navbar}>
            <NavBar history={history} style={style} shorts={shorts} />
        </View>
    </ImageBackground>
  )
}