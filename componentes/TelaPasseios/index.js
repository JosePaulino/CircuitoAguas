import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import tirolesa from '../../assets/tirolesa.jpg';
import rafting from '../../assets/rafting.jpg';
import canoagem from '../../assets/canoagem.jpg';
import estilos from "./estilos";

export default function TelaPasseios(){
  return(
    <ScrollView>
      <View style={ estilos.container }>

        <View>
          <Text style={ estilos.titulo1 }>Passeios Circuito das Águas</Text>

          <Text style={ estilos.textDescricao }>A Região do Circuito das Águas conta com muitas opções de passeios para quem curte a natureza: passeios de jeep, bike, caminhadas por trilhas entre outros. Veja alguns exemplos:</Text>
        </View>

        <View style={ estilos.cards }>
          <Text style={ estilos.titulo1 }>Tirolesa</Text>

          <Image source={ tirolesa } style={ estilos.img} />
        </View>

        <View style={ estilos.cards } >
          <Text style={ estilos.titulo1 }>Rafting</Text>

          <Image source={ rafting } style={ estilos.img} />
        </View>

        <View style={ estilos.cards }>
          <Text style={ estilos.titulo1 }>Canoagem</Text>

          <Image source={ canoagem } style={ estilos.img} />
        </View>

      </View>
      </ScrollView>

  )
}
