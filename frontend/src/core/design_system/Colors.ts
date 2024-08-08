import { useColorScheme } from 'react-native';

/** All colors must be referenced from here */
const primaryDarkColor = '#181818';
const primaryLightColor = '#EDE6D6';

export default class Colors {
  static background = (): string => useColorScheme() === 'dark' ? DarkModeColors.background : LightModeColors.background;
  static onBackground = (): string => useColorScheme() === 'dark' ? DarkModeColors.onBackground : LightModeColors.onBackground;
  static green = (): string => '#90EE90';
  static yellow = (): string => '#FFFFE0';
  static red = (): string => '#D2042D';
}

export class DarkModeColors {
  static background: string = primaryDarkColor;
  static onBackground: string = primaryLightColor;
}

export class LightModeColors {
  static background: string = primaryLightColor;
  static onBackground: string = primaryDarkColor;
}