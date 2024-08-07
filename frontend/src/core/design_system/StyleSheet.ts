import { StyleSheet } from 'react-native';
import Colors from './Colors';
import FontFamilyEnum from '../enums/FontFamilyEnum';
import FontSizeEnum from '../enums/FontSizeEnum';

/** The default stylesheet to provide default colors, fonts, etc */
export default function getStyleSheet() {
  return StyleSheet.create({
    /** Basic colors */
    background: {
      backgroundColor: Colors.background(),
    },
    onBackground: {
      backgroundColor: Colors.onBackground(),
    },
    /** Text styles */
    regularSmallText: {
      fontFamily: FontFamilyEnum.ubuntuRegular,
      fontSize: FontSizeEnum.small,
      color: Colors.onBackground(),
    },
    regularMediumText: {
      fontFamily: FontFamilyEnum.ubuntuRegular,
      fontSize: FontSizeEnum.medium,
      color: Colors.onBackground(),
    },
    regularLargeText: {
      fontFamily: FontFamilyEnum.ubuntuRegular,
      fontSize: FontSizeEnum.large,
      color: Colors.onBackground(),
    },
    italicSmallText: {
      fontFamily: FontFamilyEnum.ubuntuItalic,
      fontSize: FontSizeEnum.small,
      color: Colors.onBackground(),
    },
    italicMediumText: {
      fontFamily: FontFamilyEnum.ubuntuItalic,
      fontSize: FontSizeEnum.medium,
      color: Colors.onBackground(),
    },
    italicLargeText: {
      fontFamily: FontFamilyEnum.ubuntuItalic,
      fontSize: FontSizeEnum.large,
      color: Colors.onBackground(),
    },
    boldSmallText: {
      fontFamily: FontFamilyEnum.ubuntuBold,
      fontSize: FontSizeEnum.small,
      color: Colors.onBackground(),
    },
    boldMediumText: {
      fontFamily: FontFamilyEnum.ubuntuBold,
      fontSize: FontSizeEnum.medium,
      color: Colors.onBackground(),
    },
    boldLargeText: {
      fontFamily: FontFamilyEnum.ubuntuBold,
      fontSize: FontSizeEnum.large,
      color: Colors.onBackground(),
    },
  });
}