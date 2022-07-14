import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import Texto from './Texto';

export default function components({ texto, onPress, style }) {
  return (
    <TouchableOpacity style={[estilos.botao, style]} onPress={() => {}}>
      <Texto style={estilos.textoBotao}>{texto}</Texto>
    </TouchableOpacity>
  );
}

export const estilos = StyleSheet.create({
  botao: {
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
  },
});
