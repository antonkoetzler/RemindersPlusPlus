import 'reflect-metadata'; // So our services may work
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import {
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import suppressWarnings from './core/misc/Warnings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home_screen/HomeScreen';
import { useEffect } from 'react';
import Database from './shared/Database';
import { container } from 'tsyringe';
import UserSettingsService from './shared/services/UserSettingsService';
import { Appearance } from 'react-native';
import SplashScreen from './core/components/screens/SplashScreen';
import { Provider } from 'react-redux';
import reduxStore from './shared/ReduxStore';
import ReminderDetailsScreen from './screens/reminder_details_screen/ReminderDetailsScreen';
import { RootStackParamList } from './core/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

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

    /** Theme initialization */
    Appearance.setColorScheme(container.resolve(UserSettingsService).get()!.darkModeEnabled ? 'dark' : 'light');
  }, []);

  if (!fontsLoaded) return <SplashScreen />;

  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='ReminderDetails' component={ReminderDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default registerRootComponent(App);