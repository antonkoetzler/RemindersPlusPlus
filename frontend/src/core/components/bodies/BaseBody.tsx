import { ReactNode } from 'react';
import { View } from 'react-native';
import getStyleSheet from '../../design_system/StyleSheet';

interface BaseBodyProps {
  children: ReactNode;
};

const BaseBody = ({ children }: BaseBodyProps) => {
  const styles = getStyleSheet();

  return (
    <View
      style={[
        styles.background,
        { flex: 1 }
      ]}
    >
      {children}
    </View>
  );
};

export default BaseBody;