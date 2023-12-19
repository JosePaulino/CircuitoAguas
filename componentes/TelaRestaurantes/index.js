import React from "react";
import { View, Text, Image,  ScrollView } from "react-native";
import estilos from "./estilos";


import Jaguariuna from '../../assets/restauJagua.jpg';
import Amparo from '../../assets/retauAmparo.jpg';
import Serra from '../../assets/restauSerra.jpg';

export default function TelaRestaurantes(){
  return(
      < ScrollView>
      <View style={ estilos.container }>
        <View>
          <Text style={ estilos.titulo1 }>Bar e Restaurantes</Text>
          <Text style={ estilos.textDescricao }>O prazer da boa comida encontra no Circuito da Águas. Com inúmeras opçoes de restaurantes oferencendo o melhor da culinária internacional, juntamente à saborosa cozinha local. Confira alguns restaurantes famosos</Text>
        </View>        

          <View  style={ estilos.cards }>
            <Image source={ Jaguariuna } style={ estilos.img } />
            <Text style={ estilos.subTitulo }>Botequim</Text>
            <Text>Localização: Jaguariúna Sp</Text>
          </View>

          <View  style={ estilos.cards }>
            <Image source={ Amparo } style={ estilos.img } />
            <Text style={ estilos.subTitulo }>Terraços </Text>
            <Text>Localização: Amparo Sp</Text>
          </View>

          <View  style={ estilos.cards }>
            <Image source={ Serra } style={ estilos.img } />
            <Text style={ estilos.subTitulo }>Shangrila</Text>
            <Text>Localização: Serra Negra Sp</Text>
          </View>
      </View>
      </ScrollView>        
  )
}
