import { Appearance, Text, useColorScheme } from 'react-native';
import getStyleSheet from '../../shared/design_system/StyleSheet';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import BaseScreen from '../../shared/components/screens/BaseScreen';
import BaseAppBar from '../../shared/components/app_bars/BaseAppBar';
import BaseBody from '../../shared/components/bodies/BaseBody';
import Colors from '../../shared/design_system/Colors';
import HomeScreenAppBar from './HomeScreenAppBar';
import HomeScreenBody from './HomeScreenBody';

const HomeScreen = () => {
  const styles = getStyleSheet();

  return (
    <BaseScreen>
      <HomeScreenAppBar />
      <HomeScreenBody />
    </BaseScreen>
  );
}

export default HomeScreen;