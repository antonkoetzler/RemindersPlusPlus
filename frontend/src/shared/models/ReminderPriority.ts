import { faker } from '@faker-js/faker';
import Model from '../../core/abstracts/Model';
import Colors from '../../core/design_system/Colors';
import { JSON } from '../../core/types';
import { UnimplementedError } from '../../core/misc/Errors';

/** Class to denote the priority level of the [Reminder] and provide, for example, the reminder's base color */
export default class ReminderPriority extends Model {
  private constructor(public readonly color: string) { super(); }

  static low = new ReminderPriority(Colors.green());
  static medium = new ReminderPriority(Colors.yellow());
  static high = new ReminderPriority(Colors.red());

  static fake(): ReminderPriority {
    const values = [
      ReminderPriority.low,
      ReminderPriority.medium,
      ReminderPriority.high,
    ];

    return faker.helpers.arrayElement(values);
  }

  toString = (): string => `ReminderPriority(color: ${this.color});`;

  toJson(): JSON { throw new UnimplementedError(); }
  copyWith(): ReminderPriority { throw new UnimplementedError(); }
}