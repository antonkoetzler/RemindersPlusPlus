import { Appearance, Text } from 'react-native';
import BaseAppBar from '../../shared/components/app_bars/BaseAppBar';
import Colors from '../../shared/design_system/Colors';
import getStyleSheet from '../../shared/design_system/StyleSheet';
import Feather from '@expo/vector-icons/Feather';

const HomeScreenAppBar = () => {
  const styles = getStyleSheet();
  const iconSize = 50;
  const iconColor = Colors.onBackground();

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
      <Feather
        name='menu'
        size={iconSize}
        color={iconColor}
        onPress={() => console.log('TODO')}
      />
    </BaseAppBar>
  );
};

export default HomeScreenAppBar;