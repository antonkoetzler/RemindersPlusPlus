import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseScreen from '../../core/components/screens/BaseScreen';
import HomeScreenAppBar from './HomeScreenAppBar';
import HomeScreenBody from './HomeScreenBody';
import { ParamListBase } from '@react-navigation/native';

type HomeScreenProps = NativeStackScreenProps<ParamListBase, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <BaseScreen>
      <HomeScreenAppBar />
      <HomeScreenBody />
    </BaseScreen>
  );
}

export default HomeScreen;