import { Appearance, Text, useColorScheme } from 'react-native';
import getStyleSheet from '../../shared/design_system/StyleSheet';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import BaseScreen from '../../shared/components/screens/BaseScreen';
import BaseAppBar from '../../shared/components/app_bars/BaseAppBar';
import BaseBody from '../../shared/components/bodies/BaseBody';
import Colors from '../../shared/design_system/Colors';

const HomeScreen = () => {
  const styles = getStyleSheet();

  return (
    <BaseScreen>
      <HomeScreenAppBar />
      <BaseBody>
        <Text>Start</Text>
      </BaseBody>
    </BaseScreen>
  );
}

const HomeScreenAppBar = () => {
  const styles = getStyleSheet();
  const colorScheme = useColorScheme();
  const iconSize = 50;
  const iconColor = Colors.onBackground(colorScheme == 'dark');

  return (
    <BaseAppBar>
      <Feather
        name='sun'
        size={iconSize}
        color={iconColor}
        onPress={() => {
          Appearance.setColorScheme(
            Appearance.getColorScheme() === 'dark' ? 'light' : 'dark',
          );
          console.log(Appearance.getColorScheme());
        }}
      />
      <Text style={styles.boldLargeText}>R++</Text>
      <Ionicons
        name='add-circle'
        size={iconSize}
        color={iconColor}
      />
    </BaseAppBar>
  );
};

export default HomeScreen;