import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_700Bold, Rajdhani_500Medium} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading'
import { Background } from './src/components/Background'


import { SingIn } from './src/screens/signin'

export default function App(){
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  return(
    <Background>
      <SingIn />
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
    </Background>
  )
}