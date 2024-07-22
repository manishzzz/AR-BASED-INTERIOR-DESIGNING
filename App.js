//for auth screen
import { ActivityIndicator, Text, View } from 'react-native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



//---
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/LoginScreen/Login';
import Register from './src/RegisterScreen/Register';
import Home from './src/HomeScreen/Home';
import CameraAR from './src/cameraScreen/CameraAR';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'none',
          headerShown: false,
        }}
        initialRouteName="Auth">
        <Stack.Screen name='Auth' component={Auth} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={CameraAR} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




//Auth Screen to check is user already logged in
const Auth = ({navigation}) => {

  useEffect(()=>{
    const checkAuth = async()=>{
      try {
        let loggedIn = await AsyncStorage.getItem("loggedIn");
        if(loggedIn){
          navigation.replace("Home");
        } else {
          navigation.replace("Login");
        }
      } catch (error) {
        console.log("Error:", error);
        navigation.replace("Login");
      }
    };
    setTimeout(()=>{checkAuth()}, 1000);
  }, [])

  return (
    <View style={{backgroundColor: '#ffffff', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#000', fontSize: 24, fontWeight: '600', paddingBottom: 30}}>Interior Design</Text>
      <ActivityIndicator size={'large'} color={'#000'}/>
    </View>
  )
}