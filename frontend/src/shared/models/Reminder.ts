import { faker } from '@faker-js/faker';
import Model from '../../core/abstracts/Model';
import { JSON } from '../../core/types';
import ReminderPriority from './ReminderPriority';

export default class Reminder extends Model {
  static nameJsonKey: string = 'name';
  static descriptionJsonKey: string = 'description';
  static priorityJsonKey: string = 'priority';
  static remindAtJsonKey: string = 'remind_at';
  static createdAtJsonKey: string = 'created_at';

  readonly name: string;
  readonly description: string;
  readonly priority: ReminderPriority;
  readonly remindAt: Date;
  readonly createdAt: Date;

  constructor({
    name,
    description,
    priority,
    remindAt,
    createdAt,
  }: {
    name: string,
    description: string,
    priority: ReminderPriority,
    remindAt: Date,
    createdAt: Date,
  }) {
    super();
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.remindAt = remindAt;
    this.createdAt = createdAt;
  }

  static fake(): Reminder {
    return new Reminder({
      name: faker.string.sample(100),
      description: faker.string.sample(100),
      priority: ReminderPriority.fake(),
      remindAt: faker.date.anytime(),
      createdAt: faker.date.anytime(),
    });
  }

  static fromJson(json: JSON): Reminder {
    return new Reminder({
      name: json[Reminder.nameJsonKey],
      description: json[Reminder.descriptionJsonKey],
      priority: json[Reminder.priorityJsonKey],
      remindAt: json[Reminder.remindAtJsonKey],
      createdAt: json[Reminder.createdAtJsonKey],
    });
  }

  toJson(): JSON {
    return {
      [Reminder.nameJsonKey]: this.name,
      [Reminder.descriptionJsonKey]: this.description,
      [Reminder.priorityJsonKey]: this.priority,
      [Reminder.remindAtJsonKey]: this.remindAt,
      [Reminder.createdAtJsonKey]: this.createdAt,
    };
  }

  copyWith({
    name,
    description,
    priority,
    remindAt,
    createdAt,
  }: {
    name: string,
    description: string,
    priority: ReminderPriority,
    remindAt: Date,
    createdAt: Date,
  }) {
    return new Reminder({
      name: name,
      description: description,
      priority: priority,
      remindAt: remindAt,
      createdAt: createdAt,
    });
  }

  toString(): string {
    return `Reminder(
      name: ${this.name},
      description: ${this.description},
      priority: ${this.priority},
      remindAt: ${this.remindAt},
      createdAt: ${this.createdAt},
    );`;
  }

  formattedRemindAt = (): string => this.remindAt.toLocaleDateString();
  formattedCreatedAt = (): string => this.createdAt.toLocaleDateString();
}