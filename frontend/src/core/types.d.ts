export type JSON = { [key: string]: any };

/** React native navigation setup */
export type RootStackParamList = {
  Home: undefined;
  ReminderDetails: { reminderId: number },
};