import React from "react";
import { View, Text, Image, Button, ScrollView } from "react-native";
import estilos from './estilos'


import Mapa from './mapa.png';

export default function TelaInicial(props){
  return(
    <ScrollView>
      <View style={ estilos.container }>

        <View style={ estilos.conteudo }>

          <View>
            <Text style={ estilos.paragrafo }>Circuito das Águas</Text>

            <Text style={ estilos.subTitulo }>Conheça um pouco mais.</Text>
          </View>

          <View>
          <Image
            source={ Mapa } style={ estilos.img } />
          </View>

          <View> 
          <View style={estilos.botoes}  >           
            <Button   
              title="VER RESTAURANTES"
              onPress = {()=> { props.navigation.navigate('Tela Restaurantes')} } 
              color="#372d00"
         
            />
          </View>
          
          <View  style={ estilos.botoes }>
            <Button 
              title="VER PASSEIOS"
              onPress = {()=> { props.navigation.navigate('Tela Passeios')} }     
              color="#372d00"                 
            />
          </View>

            <Button
              title="VER HOSPEDAGEM"
              onPress = {()=> { props.navigation.navigate('Tela Hospedagem')} }     
              color="#372d00"     
            />
          </View>

        </View>
      </View>
      </ScrollView>

  )
}


