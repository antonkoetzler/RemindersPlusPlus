import { useColorScheme, View } from 'react-native';
import DirectionEnum from '../../../core/enums/DirectionEnum';
import Colors from '../../design_system/Colors';

interface BaseDividerProps {
  direction: DirectionEnum;
};

const BaseDivider = ({ direction }: BaseDividerProps) => {
  const isHorizontal: boolean = DirectionEnum.isHorizontal(direction);

  return (
    <View
      style={{
        alignSelf: 'center',
        height: isHorizontal ? 1 : '95%',
        width: isHorizontal ? '95%' : 1,
        backgroundColor: Colors.onBackground(),
      }}
    />
  );
};

export default BaseDivider;