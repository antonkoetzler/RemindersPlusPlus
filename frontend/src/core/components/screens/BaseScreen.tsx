import { ReactNode } from 'react';
import { Appearance, SafeAreaView, StatusBar } from 'react-native';
import getStyleSheet from '../../design_system/StyleSheet';
import Colors from '../../design_system/Colors';

interface BaseScreenProps {
  children: ReactNode;
};

/** Must be used to make every screen component */
const BaseScreen = ({ children }: BaseScreenProps) => {
  const styles = getStyleSheet();
  const isDarkMode = Appearance.getColorScheme() == 'dark';

  return (
    <SafeAreaView style={[styles.background, { flex: 1 }]}>
      <StatusBar
        backgroundColor={Colors.background(isDarkMode)}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      {children}
    </SafeAreaView>
  );
};

export default BaseScreen;