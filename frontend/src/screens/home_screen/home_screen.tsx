import { SafeAreaView, Text } from 'react-native';
import BaseScreen from '../../shared/screens/base_screen';
import FontFamilyEnum from '../../shared/enums/font_family_enum';

// Home screen for Reminders++
export default function HomeScreen() {
  return (
    <BaseScreen>
      <Text style={{ fontFamily: FontFamilyEnum.ubuntuBold }}>We starting to get lit</Text>
    </BaseScreen>
  );
}