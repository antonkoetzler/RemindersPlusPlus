import Feather from '@expo/vector-icons/Feather';
import { registerRootComponent } from 'expo';
import { Appearance, SafeAreaView, View, Text } from 'react-native';
import getStyleSheet from './shared/design_system/StyleSheet';
import { useFonts } from 'expo-font';
import {
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import SplashScreen from './shared/components/screens/SplashScreen';
import suppressWarnings from './shared/misc/Warnings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home_screen/HomeScreen';

const Stack = createNativeStackNavigator();

suppressWarnings();

const App = () => {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) return <SplashScreen />;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);