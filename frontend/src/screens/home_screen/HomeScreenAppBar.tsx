import { Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import getStyleSheet from '../../core/design_system/StyleSheet';
import BaseAppBar from '../../core/components/app_bars/BaseAppBar';
import Colors from '../../core/design_system/Colors';
import UserSettingsHelper from '../../shared/helpers/UserSettingsHelper';
import { useDispatch } from 'react-redux';
import { showModal } from '../../shared/reducers/ModalReducer';

const HomeScreenAppBar = () => {
  const styles = getStyleSheet();
  const iconSize = 50;
  const iconColor = Colors.onBackground();
  const dispatch = useDispatch();

  return (
    <BaseAppBar>
      <Feather
        name='sun'
        size={iconSize}
        color={iconColor}
        onPress={() => UserSettingsHelper.toggleDarkMode()}
      />
      <Text style={styles.boldLargeText}>R++</Text>
      <Feather
        name='menu'
        size={iconSize}
        color={iconColor}
        onPress={() => dispatch(showModal(<Text style={{ padding: 50, backgroundColor: 'red' }}>Working</Text>))}
      />
    </BaseAppBar>
  );
};

export default HomeScreenAppBar;