import 'reflect-metadata'; // So our services may work
import { registerRootComponent } from 'expo';
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
import { useEffect } from 'react';
import Database from './shared/Database';
import { container } from 'tsyringe';
import UserSettingsService from './shared/services/UserSettingsService';

const Stack = createNativeStackNavigator();

suppressWarnings();

const App = () => {
  /** Font initialization */
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_700Bold,
  });

  useEffect(() => {
    /** Database initialization */
    const database = Database.getInstance();

    /** IoC container initialization */
    container.registerInstance(UserSettingsService, new UserSettingsService(database));
    container.resolve(UserSettingsService).get();
  }, []);

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