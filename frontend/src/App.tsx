import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home_screen/home_screen';
import LoginScreen from './screens/login_screen/login_screen';
import ScreensEnum from './shared/enums/screens_enum';
import Database from './shared/database';
import { useEffect, useState } from 'react';
import SplashScreen from './shared/screens/splash_screen';
import { useFonts } from 'expo-font';
import FontFamilyEnum from './shared/enums/font_family_enum';

const Stack = createNativeStackNavigator();

function App() {
  const [loaded, error] = useFonts({
    [FontFamilyEnum.ubuntuRegular]: require('../assets/fonts/Ubuntu-Regular.ttf'),
    [FontFamilyEnum.ubuntuItalic]: require('../assets/fonts/Ubuntu-Italic.ttf'),
    [FontFamilyEnum.ubuntuBold]: require('../assets/fonts/Ubuntu-Bold.ttf'),
  });

  useEffect(() => Database.initializeDatabase(), []);

  if (!loaded && !error) return SplashScreen();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreensEnum.homeScreen} component={HomeScreen} />
        <Stack.Screen name={ScreensEnum.loginScreen} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);