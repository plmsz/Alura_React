import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function components({ children, style }) {
  let estilo = estilos.texto;

  if (style?.fontWeight === 'bold') {
    estilo = estilos.textoNegrito;
  }
  return <Text style={[style, estilo]}>{children}</Text>;
}

export const estilos = StyleSheet.create({
  texto: {
    fontWeight: 'normal',
    fontFamily: 'MontserratRegular',
},
textoNegrito: {
    fontFamily: 'MontserratBold',
    fontWeight: 'bold',
  },
});
