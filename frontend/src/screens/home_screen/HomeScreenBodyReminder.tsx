import { Dimensions, Text, TouchableWithoutFeedback, View } from 'react-native';
import getStyleSheet from '../../core/design_system/StyleSheet';
import Reminder from '../../shared/models/Reminder';
import { UnimplementedError } from '../../core/misc/Errors';

const HomeScreenBodyReminder = ({ reminder }: { reminder: Reminder }) => {
  const styles = getStyleSheet();

  return (
    <TouchableWithoutFeedback onPress={() => { throw new UnimplementedError() }}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Wrapper for color & name/reminder date */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
            maxWidth: Dimensions.get('window').width - 200,
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
          <View>
            <Text style={styles.regularMediumText} numberOfLines={1} ellipsizeMode="tail">{reminder.name}</Text>
            <Text style={styles.regularSmallText} numberOfLines={1} ellipsizeMode="tail">Remind at: {reminder.formattedRemindAt()}</Text>
          </View>
        </View>

        {/* Created at */}
        <Text style={styles.regularSmallText}>Created at: {reminder.formattedCreatedAt()}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreenBodyReminder;