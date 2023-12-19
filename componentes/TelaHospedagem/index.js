import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import estilos from './estilos';

import hospedagemJagua from '../../assets/hospedagemJagua.jpg';
import hospedagemAmp from '../../assets/hospedagemAmp.jpg';
import hospedagemSerra from '../../assets/hospedagemSerra.jpg';

export default function TelaHospedagem(){
  return(
    <ScrollView>
    <View style={ estilos.container }>

    <View>
      <Text style={ estilos.titulo1 }>Pousadas e Hotéis</Text>
      <Text style={ estilos.textDescricao }>O Circuito da Águas conta com excelentes hotéis e pousadas cujos preços podem variar de R$350,00 à 5000,00. Veja algumas pousadas abaixo:</Text>
    </View>        

      <View  style={ estilos.cards }>
        <Image source={ hospedagemJagua } style={ estilos.img } />
        <Text style={ estilos.subTitulo }>Hotel Pousada Duas Marias</Text>
        <Text>Valor médio: R$ 350,00</Text>
        <Text>Localização: Jaguariúna SP</Text>
      </View>

      <View  style={ estilos.cards }>
        <Image source={ hospedagemAmp } style={ estilos.img } />
        <Text style={ estilos.subTitulo }>Pousada Bom Descanso</Text>
        <Text>Valor médio: R$ 450,00</Text>
        <Text>Localização: Amparo SP</Text>
      </View>

      <View  style={ estilos.cards }>
        <Image source={ hospedagemSerra } style={ estilos.img } />
        <Text style={ estilos.subTitulo }>Pousada Mundo Bello</Text>
        <Text>Valor médio: R$ 590,00</Text>
        <Text>Localização: Serra Negra SP</Text>
      </View>    
  </View>
  </ScrollView>
  )
}
