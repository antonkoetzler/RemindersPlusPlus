import { RouteProp, useRoute } from '@react-navigation/native';
import BaseScreen from '../../core/components/screens/BaseScreen';
import ReminderDetailsScreenAppBar from './ReminderDetailsScreenAppBar';
import { RootStackParamList } from '../../core/types';
import ReminderDetailsScreenBody from './ReminderDetailScreenBody';

const ReminderDetailsScreen = () => {
  const reminderId = useRoute<RouteProp<RootStackParamList>>().params!.reminderId;

  console.log(reminderId);

  return (
    <BaseScreen>
      <ReminderDetailsScreenAppBar />
      <ReminderDetailsScreenBody />
    </BaseScreen>
  );
};

export default ReminderDetailsScreen;