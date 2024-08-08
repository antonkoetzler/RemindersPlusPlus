import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseScreen from '../../core/components/screens/BaseScreen';
import ReminderDetailsScreenAppBar from './ReminderDetailsScreenAppBar';

type ReminderDetailsScreenProps = NativeStackScreenProps<ParamListBase, 'ReminderDetails'>

const ReminderDetailsScreen = ({ navigation }: ReminderDetailsScreenProps) => {
  return (
    <BaseScreen>
      <ReminderDetailsScreenAppBar />
    </BaseScreen>
  );
};

export default ReminderDetailsScreen;