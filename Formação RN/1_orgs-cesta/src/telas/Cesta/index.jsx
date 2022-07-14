import { ScrollView, StyleSheet, View } from 'react-native';
import Detalhes from './components/Detalhes';
import { Itens } from './components/Item';
import Topo from './components/Topo';

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <ScrollView>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
        <Itens {...itens} />
      </View>
    </ScrollView>
  );
}

export const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
