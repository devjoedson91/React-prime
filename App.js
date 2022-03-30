import 'react-native-gesture-handler'; // componente de restos da pagina
import React from 'react';
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

function App() { // primeiro componente que sera renderizado

  return (
    <NavigationContainer>
        <StatusBar hidden={true}/>
        <Routes/>
    </NavigationContainer>
  )

}

export default App;

