import { Text } from 'react-native';
import getStyleSheet from '../../shared/design_system/StyleSheet';

const HomeScreenBodyReminder = () => {
  const styles = getStyleSheet();

  return (
    <Text
      style={[
        styles.italicMediumText,
        {
          marginVertical: 50,
          color: 'green',
        }
      ]}
    >
      Tomorrow
    </Text>
  );
};

export default HomeScreenBodyReminder;