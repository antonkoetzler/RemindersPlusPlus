import BaseScreen from '../../core/components/screens/BaseScreen';
import getStyleSheet from '../../core/design_system/StyleSheet';
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