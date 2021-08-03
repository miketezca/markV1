import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';
import screenProduction from './src/Produccion';
import ScreenTecnico from './src/Tecnico';
import screenLines from './src/Line';
import screenEquip from './src/Equip';
import screenRepoCom from  './src/repoCompleto';

const Stack = createStackNavigator();

export default function App() {

  /** Aquí mandamos a llamar todo */
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions = {{
        header: () => null
      }}
      >
        <Stack.Screen
          name = "Screen_A"       // header
          component = { ScreenA } // function name
        />
        <Stack.Screen
          name = "B"              // header
          component = { ScreenB } // function name
        />
        <Stack.Screen
          name = "Produccion"              // header
          component = { screenProduction } // function name
        />
        <Stack.Screen
          name = "Line"              // header
          component = { screenLines } // function name
        />
        <Stack.Screen
          name = "Equip"              // header
          component = { screenEquip } // function name
        />
        <Stack.Screen
          name = "subirReporte"              // header
          component = { screenRepoCom } // function name
        />
        <Stack.Screen
          name = "Tecnico"              // header
          component = { ScreenTecnico } // function name
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

