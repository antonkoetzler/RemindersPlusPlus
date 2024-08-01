import { Text } from "react-native";
import FontFamilyEnum from "../enums/font_family_enum";

export default function SplashScreen() {
  return (
    <Text
      style={{
        fontFamily: FontFamilyEnum.ubuntuItalic,
      }}
    >Reminders++ Loading</Text>
  );
}