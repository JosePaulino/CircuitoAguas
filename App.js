import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from "./componentes/TelaInicial";
import TelaHospedagem from "./componentes/TelaHospedagem";
import TelaPasseios from "./componentes/TelaPasseios";
import TelaRestaurantes from "./componentes/TelaRestaurantes";


const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela Inícial" component = { TelaInicial } />
        <Stack.Screen name="Tela Hospedagem" component = { TelaHospedagem } />
        <Stack.Screen name="Tela Passeios" component = { TelaPasseios } />
        <Stack.Screen name="Tela Restaurantes" component = { TelaRestaurantes } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}