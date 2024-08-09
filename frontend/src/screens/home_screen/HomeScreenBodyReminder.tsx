import { Text, TouchableWithoutFeedback, View } from 'react-native';
import getStyleSheet from '../../core/design_system/StyleSheet';
import Reminder from '../../shared/models/Reminder';
import { useContext } from 'react';
import { NavigationContext } from '@react-navigation/native';

const HomeScreenBodyReminder = ({ reminder }: { reminder: Reminder }) => {
  const styles = getStyleSheet();
  const navigation = useContext(NavigationContext)!;

  return (
    <TouchableWithoutFeedback
      onPress={
        () => navigation.navigate(
          'ReminderDetails',
          { reminderId: reminder.id },
        )
      }
    >
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        {/* Color denoting the priority of the reminder */}
        <View
          style={{
            width: 15,
            height: 15,
            borderRadius: 10,
            backgroundColor: reminder.priority.color,
          }}
        />

        {/* Name and date to remind at */}
        <View style={{ flex: 1, gap: 3 }}>
          <Text style={styles.regularMediumText}>{reminder.name}</Text>
          <Text style={styles.regularSmallText}>{reminder.formattedRemindAt()}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreenBodyReminder;