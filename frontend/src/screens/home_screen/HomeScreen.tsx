import BaseScreen from '../../core/components/screens/BaseScreen';
import HomeScreenAppBar from './HomeScreenAppBar';
import HomeScreenBody from './HomeScreenBody';

const HomeScreen = () => {
  return (
    <BaseScreen>
      <HomeScreenAppBar />
      <HomeScreenBody />
    </BaseScreen>
  );
}

export default HomeScreen;