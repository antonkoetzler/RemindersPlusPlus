import { useColorScheme } from 'react-native';

/** All colors must be referenced from here */
const primaryDarkColor = '#181818';
const primaryLightColor = '#EDE6D6';

export default class Colors {
  static background(): string {
    return useColorScheme() === 'dark' ? DarkModeColors.background : LightModeColors.background;
  }

  static onBackground(): string {
    return useColorScheme() === 'dark' ? DarkModeColors.onBackground : LightModeColors.onBackground;
  }
}

export class DarkModeColors {
  static background: string = primaryDarkColor;
  static onBackground: string = primaryLightColor;
}

export class LightModeColors {
  static background: string = primaryLightColor;
  static onBackground: string = primaryDarkColor;
}