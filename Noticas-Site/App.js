
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Principal from "./src/app/index";
import Esporte from "./src/app/esporte";
import Mundo from "./src/app/mundo";
import Tecnologia from "./src/app/tecnologia";
import NoticiaEsporte1 from "./src/noticia/NoticiaEsporte1";
import NoticiaEsporte2 from "./src/noticia/NoticiaEsporte2";
import NoticiaEsporte3 from "./src/noticia/NoticiaEsporte3";
import NoticiaMundo1 from "./src/noticia2/NoticiaMundo1";
import NoticiaMundo2 from "./src/noticia2/NoticiaMundo2";
import NoticiaMundo3 from "./src/noticia2/NoticiaMundo3";
import NoticiasTecnologia1 from "./src/noticia3/NoticiasTecnologia1";
import NoticiasTecnologia2 from "./src/noticia3/NoticiasTecnologia2";
import NoticiasTecnologia3 from "./src/noticia3/NoticiasTecnologia3";




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
        <Stack.Screen name="Esporte" component={Esporte} options={{ headerShown: false }} />
        <Stack.Screen name="Mundo" component={Mundo} options={{ headerShown: false }} />
        <Stack.Screen name="Tecnologia" component={Tecnologia} options={{ headerShown: false }} />
        <Stack.Screen name="NoticiaEsporte1" component={NoticiaEsporte1} options={{ headerShown: false }} />
        <Stack.Screen name="NoticiaEsporte2" component={NoticiaEsporte2} options={{ headerShown: false }} />
        <Stack.Screen name="NoticiaEsporte3" component={NoticiaEsporte3} options={{ headerShown: false }} />
        <Stack.Screen name="NoticiaMundo1" component={NoticiaMundo1} options={{ headerShown: false }} />
        <Stack.Screen name="NoticiaMundo2" component={NoticiaMundo2} options={{ headerShown: false }} />
        <Stack.Screen name="NoticiaMundo3" component={NoticiaMundo3} options={{ headerShown: false }} />
        <Stack.Screen name="NoticiasTecnologia1" component={NoticiasTecnologia1} options={{ headerShown: false }} />
        <Stack.Screen name="NoticiasTecnologia2" component={NoticiasTecnologia2} options={{ headerShown: false }} />
        <Stack.Screen name="NoticiasTecnologia3" component={NoticiasTecnologia3} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
