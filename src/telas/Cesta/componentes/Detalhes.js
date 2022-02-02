import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
  return <>
    <Texto style={estilos.nome}>{ nome }</Texto>
    <View style={estilos.mercado}>
      <Image source={logoFazenda} style={estilos.imagemMercado} />
      <Texto style={estilos.nomeMercado}>{ nomeFazenda }</Texto>
    </View>
    <Texto style={estilos.descricao}>{ descricao }</Texto>
    <Texto style={estilos.preco}>{ preco }</Texto>

    <TouchableOpacity style={estilos.botao} onPress={() => {}}>
      <Texto style={estilos.textoBotao}>{ botao }</Texto>
    </TouchableOpacity>
  </>
}

const estilos = StyleSheet.create({
  nome: {
    color: "black",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  mercado: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemMercado: {
    width: 32,
    height: 32,
  },
  nomeMercado: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#708090",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#006400",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#006400",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
})
