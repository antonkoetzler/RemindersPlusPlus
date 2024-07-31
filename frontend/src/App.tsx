import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home_screen/home_screen';
import LoginScreen from './screens/login_screen/login_screen';
import ScreensEnum from './shared/enums/screens_enum';
import Database from './shared/database';

const Stack = createNativeStackNavigator();

function App() {
  const database = Database.getInstance();

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