import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import MainScreen from './screens/subScreens/MainScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MainScreen2 from './screens/subScreens/MainScreen2';
import ProfileScreen from './screens/subScreens/ProfileScreen';
import ConfigScreen from './screens/subScreens/ConfigScreen';
import Home from './screens/Home';
import Login from './screens/Login';
import {
  NativeRouter,
  Route,
  Switch
} from "react-router-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect,useState } from 'react';
import {useHistory} from 'react-router-native';


export default function App() {

  const route = useHistory()
  const [welcome, setWelcome] = useState('true')


  useEffect(() => {
    const checkWelcome = async () => {
      const value = await AsyncStorage.getItem('welcome')
      if (value) {
        setWelcome('true')
      }
      
      if(!value) {
        await AsyncStorage.setItem('welcome', 'false')
      }
    }
    checkWelcome()
  }, [route])
  

  return (
    <Provider store={store}>  
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={welcome === 'false' ? WelcomeScreen : Home} />
          <Route exact path="/welcome" component={WelcomeScreen} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={MainScreen} />
          <Route exact path="/main2" component={MainScreen2} />
          <Route exact path="/profile" component={ProfileScreen} />
          <Route exact path="/config" component={ConfigScreen} />
        </Switch>
      </NativeRouter>
  </Provider>
  )
}
