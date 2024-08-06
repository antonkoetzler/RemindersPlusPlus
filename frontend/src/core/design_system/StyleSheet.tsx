import { StyleSheet, useColorScheme } from 'react-native';
import Colors from './Colors';
import FontFamilyEnum from '../enums/FontFamilyEnum';
import FontSizeEnum from '../enums/FontSizeEnum';

/** The default stylesheet to provide default colors, fonts, etc */
export default function getStyleSheet() {
  const isDarkMode = useColorScheme() == 'dark';

  return StyleSheet.create({
    /** Basic colors */
    background: {
      backgroundColor: Colors.background(isDarkMode),
    },
    onBackground: {
      backgroundColor: Colors.onBackground(isDarkMode),
    },
    /** Text styles */
    regularSmallText: {
      fontFamily: FontFamilyEnum.ubuntuRegular,
      fontSize: FontSizeEnum.small,
      color: Colors.onBackground(isDarkMode),
    },
    regularMediumText: {
      fontFamily: FontFamilyEnum.ubuntuRegular,
      fontSize: FontSizeEnum.medium,
      color: Colors.onBackground(isDarkMode),
    },
    regularLargeText: {
      fontFamily: FontFamilyEnum.ubuntuRegular,
      fontSize: FontSizeEnum.large,
      color: Colors.onBackground(isDarkMode),
    },
    italicSmallText: {
      fontFamily: FontFamilyEnum.ubuntuItalic,
      fontSize: FontSizeEnum.small,
      color: Colors.onBackground(isDarkMode),
    },
    italicMediumText: {
      fontFamily: FontFamilyEnum.ubuntuItalic,
      fontSize: FontSizeEnum.medium,
      color: Colors.onBackground(isDarkMode),
    },
    italicLargeText: {
      fontFamily: FontFamilyEnum.ubuntuItalic,
      fontSize: FontSizeEnum.large,
      color: Colors.onBackground(isDarkMode),
    },
    boldSmallText: {
      fontFamily: FontFamilyEnum.ubuntuBold,
      fontSize: FontSizeEnum.small,
      color: Colors.onBackground(isDarkMode),
    },
    boldMediumText: {
      fontFamily: FontFamilyEnum.ubuntuBold,
      fontSize: FontSizeEnum.medium,
      color: Colors.onBackground(isDarkMode),
    },
    boldLargeText: {
      fontFamily: FontFamilyEnum.ubuntuBold,
      fontSize: FontSizeEnum.large,
      color: Colors.onBackground(isDarkMode),
    },
  });
}