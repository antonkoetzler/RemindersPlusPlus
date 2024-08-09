import BaseAppBar from '../../core/components/app_bars/BaseAppBar';
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '../../core/design_system/Colors';

const ReminderDetailsScreenAppBar = () => {
  const iconSize = 50;
  const iconColor = Colors.onBackground();

  return (
    <BaseAppBar>
      <AntDesign
        name='check'
        size={iconSize}
        color={iconColor}
      />
      <AntDesign
        name='close'
        size={iconSize}
        color={iconColor}
      />
    </BaseAppBar>
  );
};

export default ReminderDetailsScreenAppBar;