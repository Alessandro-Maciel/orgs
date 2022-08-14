import {StatusBar, SafeAreaView} from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { View } from "react-native";

import Cesta from "./src/telas/Cesta";


export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular" : Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fontCarregada) {
    return <View></View>
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta />
    </SafeAreaView>
  );
}
