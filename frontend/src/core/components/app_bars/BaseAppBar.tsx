import { FC, ReactNode } from 'react';
import { View } from 'react-native';
import BaseDivider from '../dividers/BaseDivider';
import DirectionEnum from '../../../core/enums/DirectionEnum';

const BaseAppBar: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingBottom: 10,
        }}
      >{children}</View>
      <BaseDivider direction={DirectionEnum.horizontal} />
    </View>
  );
};

export default BaseAppBar;