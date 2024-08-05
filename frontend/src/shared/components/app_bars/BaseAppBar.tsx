import { ReactNode } from 'react';
import { View } from 'react-native';
import BaseDivider from '../dividers/BaseDivider';
import DirectionEnum from '../../enums/DirectionEnum';

interface BaseAppBarProps {
  children: ReactNode;
};

const BaseAppBar = ({ children }: BaseAppBarProps) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingBottom: 10,
        }}
      >
        {children}
      </View>
      <BaseDivider direction={DirectionEnum.horizontal} />
    </View>
  );
};

export default BaseAppBar;