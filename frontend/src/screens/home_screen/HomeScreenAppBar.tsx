import { Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import getStyleSheet from '../../core/design_system/StyleSheet';
import BaseAppBar from '../../core/components/app_bars/BaseAppBar';
import Colors from '../../core/design_system/Colors';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../shared/reducers/UserSettingsReducer';

const HomeScreenAppBar = () => {
  const dispatch = useDispatch();
  const styles = getStyleSheet();
  const iconSize = 50;
  const iconColor = Colors.onBackground();

  return (
    <BaseAppBar>
      <Feather
        name='sun'
        size={iconSize}
        color={iconColor}
        onPress={() => dispatch(toggleDarkMode())}
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