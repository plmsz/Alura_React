import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';
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
    <SafeAreaView>
      <Cesta />
      <StatusBar />
    </SafeAreaView>
  );
}

