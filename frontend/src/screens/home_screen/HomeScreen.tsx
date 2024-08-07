import BaseScreen from '../../core/components/screens/BaseScreen';
import getStyleSheet from '../../core/design_system/StyleSheet';
import HomeScreenAppBar from './HomeScreenAppBar';
import HomeScreenBody from './HomeScreenBody';
import { Text } from 'react-native';

const HomeScreen = () => {
  return (
    <BaseScreen>
      <HomeScreenAppBar />
      <HomeScreenBody />
    </BaseScreen>
  );
}

export default HomeScreen;