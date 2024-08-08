import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseScreen from '../../core/components/screens/BaseScreen';
import HomeScreenAppBar from './HomeScreenAppBar';
import HomeScreenBody from './HomeScreenBody';
import { ParamListBase } from '@react-navigation/native';
import { NavigationProvider } from '../../shared/contexts/NavigationContext';

type HomeScreenProps = NativeStackScreenProps<ParamListBase, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <NavigationProvider navigation={navigation}>
      <BaseScreen>
        <HomeScreenAppBar />
        <HomeScreenBody />
      </BaseScreen>
    </NavigationProvider>
  );
}

export default HomeScreen;