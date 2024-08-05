import getStyleSheet from '../../shared/design_system/StyleSheet';
import BaseScreen from '../../shared/components/screens/BaseScreen';
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