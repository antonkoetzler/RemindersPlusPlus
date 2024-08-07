import Model from '../../core/abstracts/Model';
import { UnimplementedError } from '../../core/misc/Errors';
import { JSON } from '../../core/types';

/** Used to pass data into, for example, [BaseModal] */
export default class MenuItem extends Model {
  readonly text: string;
  readonly onPress: Function;

  constructor({
    text,
    onPress,
  }: {
    text: string,
    onPress: Function,
  }) {
    super();
    this.text = text;
    this.onPress = onPress;
  }

  copyWith({
    text,
    onPress,
  }: {
    text?: string,
    onPress?: Function,
  }) {
    return new MenuItem({
      text: text ?? this.text,
      onPress: onPress ?? this.onPress,
    });
  }

  toString(): string {
    return `MenuItem(
      text: ${this.text},
      onPress: ${this.onPress},
    );`;
  }

  toJson(): JSON { throw new UnimplementedError(); }
}