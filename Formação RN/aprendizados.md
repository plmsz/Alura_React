## Get Started

npm install -g expo-cli
npm start ou expo start

## Limitações do expo

https://docs.expo.dev/introduction/why-not-expo/

# Extensão R Component

rnbc → Create a new React Native Basic Component
rnso → Create a new React Native Stylesheet Component
rnsc → Create a new React Native Component with Styled Component
rnscs → Create a new Styled Component File
rnsctc → Get the path to color theme props
rnsctf → Get the path to fonts theme props
nbc → Create Native Base Component

# Componetes e estilos

## SafeAreaView e StatusBar

The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later.

The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information, battery level and/or other status icons.

```jsx
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <Cesta />
      <StatusBar />
    </SafeAreaView>
  );
}
```

## Importando e definindo altura e largura de uma imagem de forma dinâmica

- flex-direction: column é padrão no RN

```jsx
import { Image, StyleSheet, Dimensions, Text } from 'react-native';
import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={styles.topo} />
    </>
  );
}

export const styles = StyleSheet.create({
  topo: {
    width: '100%',
    height: (578 / 768) * width, // (height image / width image ) * screen width
  },
});
```

## Padding Vertical e Horizontal

```jsx
import { StyleSheet, Text, View } from 'react-native';

export default function Cesta() {
  return (
    <View style={styles.cesta}>
      <Text>Cesta de Verduras</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
```

## Font personalizada

expo install expo-font @expo-google-fonts/nome_da_fonte

ex: expo install expo-font @expo-google-fonts/montserrat

Se a font já é bold não precisa colocar o font-weight
No App.jsx

```jsx
import { View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

export default function App() {
  const [fontesCarregadas] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontesCarregadas) {
    return <View />;
  }

  return (
  //  ...
  );
}

```

```jsx
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Text style={styles.titulo}>Detalhes da Cesta</Text>
      <View style={styles.cesta}>
        <Text style={styles.nome}>Cesta de Verduras</Text>
        <View style={styles.fazenda}>
          <Image style={styles.imagemFazenda} source={logo} />
          <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazendo direto
          para a sua cozinha
        </Text>
        <Text style={styles.preco}>R$ 40.00</Text>
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  nome: {
    fontFamily: 'MontserratBold',
  },
  nomeFazenda: {
    fontFamily: 'MontserratRegular',
  },
});
```

## Criando componente para fonte

```jsx
import { StyleSheet, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontesCarregadas] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontesCarregadas) {
    return <View />;
  }

  return (
    <SafeAreaView>
      <Cesta />
    </SafeAreaView>
  );
}
```

```jsx
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
```

```jsx
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import Texto from '../components/Texto';

const width = Dimensions.get('screen').width;

export default function Cesta() {
  return (
    <>
      <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>
      <Texto style={estilos.nome}>Cesta de Verduras</Texto>
      <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
      <Texto style={estilos.descricao}>
        Uma cesta com produtos selecionados cuidadosamente da fazendo direto
        para a sua cozinha
      </Texto>
      <Texto style={estilos.preco}>R$ 40.00</Texto>
    </>
  );
}

export const estilos = StyleSheet.create({
  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16,
  },

  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
  },
});
```

## Desconstruindo o mock e passando parâmetros

```jsx
export function App() {
  return (
    <Cesta {...mock} />
    //    Igual a linha abaixo:
    //  <Cesta topo={mock.topo} detalhes={mock.detalhes} />
  );
}
```

```jsx
import logo from '../../assets/logo.png';

export default const cesta = {
  topo: {
    titulo: 'Detalhes da Cesta'
  }
};

```

```jsx
export default function Topo({ titulo }) {
  return (
    <>
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
  );
}
```

# Tela de carregamento

expo install expo-splash-screen
https://docs.expo.dev/versions/latest/sdk/splash-screen/

```jsx
import React, { useEffect, useCallback } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
```

# Botão

React Native renderiza elementos de interface do usuário específicos da plataforma e, como resultado, há opções limitadas de estilo e personalização (os documentos oficiais react native admitem o mesmo). <Button title='Botão'/>

```jsx
<TouchableOpacity style={estilos.botao}>
  <Texto style={estilos.textoBotao}>{botao}</Texto>
</TouchableOpacity>
```

## React Native Touchable

Touchable é um componente para superar a limitação ao usar estilos no componente Button.

Ou seja, no quesito estilos, oferece mais possibilidades que o Componente Button.

Para ser mais preciso é um wrapper para fazer com que uma View responda apropriadamente a toques, fazendo funcionar da mesma maneira que um botão.

1. TouchableNativeFeedback
   TouchableNativeFeedback é um wrapper para fazer com que uma View responda apropriadamente a toques, sendo que está disponível somente para Android.

Este componente usa o estado nativo do Android para exibir o feedback do toque.

Para Importar TouchableNativeFeedback no Código
import { TouchableNativeFeedback } from 'react-native'
Para Renderizar na Tela

```jsx
<TouchableNativeFeedback>
  <View>
    <Text>Label</Text>
  </View>
</TouchableNativeFeedback>
```

2. TouchableHighlight
   TouchableHighlight é um wrapper para fazer com que uma View responda apropriadamente a toques.

Ao ser clicado, a opacidade da View é diminuída, ou seja, a cor da View é escurecida.

Para Importar TouchableHighlight no Código
import { TouchableHighlight } from 'react-native'
Para Renderizar na Tela

```jsx
<TouchableHighlight>
  <Text>Label</Text>
</TouchableHighlight>
```

3. TouchableOpacity
   TouchableOpacity é um wrapper para fazer com que uma View responda apropriadamente a toques.

Ao ser clicado, a opacidade da View é diminuída, mas de maneira gradual, diminuindo assim a sua intensidade.

Para Importar TouchableOpacity no Código
import { TouchableOpacity } from 'react-native'
Para Renderizar na Tela

```jsx
<TouchableOpacity>
  <Text>Label</Text>
</TouchableOpacity>
```

4. TouchableWithoutFeedback
   TouchableWithoutFeedback não apresenta nenhum feedback visual, portanto não use a menos que tenha uma boa razão.

Já que todos os elementos que respondem ao toque devem receber um feedback visual quando tocados.

Para Importar TouchableWithoutFeedback no Código
import { TouchableWithoutFeedback } from 'react-native'
Para Renderizar na Tela

```jsx
<TouchableWithoutFeedback>
  <View>
    <Text>Label</Text>
  </View>
</TouchableWithoutFeedback>
```

# Scroll

```jsx
import { ScrollView, StyleSheet, View } from 'react-native';
import Detalhes from './components/Detalhes';

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <ScrollView>
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
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
```
# Listas com map

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';

const cesta = {
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
    ]
  }
};

export default cesta;

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Texto from '../../../components/Texto';

export function Itens({ titulo, lista }) {
  return (
    <>
      <Texto style={estilos.titulo}>{titulo}</Texto>
      {lista.map(({ nome, imagem }) => {
        return (
          <View key={nome} style={estilos.item}>
            <Image style={estilos.imagem} source={imagem} />
            <Texto style={estilos.nome}>{nome}</Texto>
          </View>
        );
      })}
    </>
  );
}
