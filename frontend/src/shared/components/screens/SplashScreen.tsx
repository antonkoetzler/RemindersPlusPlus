import { Text, View } from 'react-native';
import getStyleSheet from '../../design_system/StyleSheet';

const SplashScreen = () => {
  const styles = getStyleSheet();

  return (
    <View
      style={[
        styles.background,
        { flex: 1 },
      ]}
    >
      <Text style={styles.boldLargeText}>Reminders++ Loading</Text>
    </View>
  );
};

export default SplashScreen;