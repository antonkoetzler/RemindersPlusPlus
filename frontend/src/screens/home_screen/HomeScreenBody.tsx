import { FlatList } from 'react-native';
import HomeScreenBodyReminder from './HomeScreenBodyReminder';
import BaseBody from '../../core/components/bodies/BaseBody';
import Reminder from '../../shared/models/Reminder';

const HomeScreenBody = () => {
  return (
    <BaseBody>
      <FlatList
        data={[
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
          Reminder.fake(),
        ]}
        renderItem={({ item }) => <HomeScreenBodyReminder reminder={item} />}
      />
    </BaseBody>
  );
};

export default HomeScreenBody;