import Model from '../../core/abstracts/Model';
import { UnimplementedError } from '../../core/misc/Errors';
import { JSON } from '../../core/types';

/**
 * Model to create condition data for [Database] queries
 * 
 * When creating a [DatabaseConditions] object, you must pass a JSON where:
 * 1. The keys of the JSON are the attributes of said table
 * 2. The values of the keys of the JSON are the values being used for the condition
 * 
 * Example of creating [DatabaseConditions]
 * ``` javascript
 * new DatabaseConditions({
 *   atributeOne: valueOne,
 *   atributeTwo: valueTwo,
 *   atributeN: valueN,
 * });
 * ```
 */
export default class DatabaseConditions extends Model {
  /** List of the atributes (JSON keys provided in the constructor) */
  readonly atributes: string[];

  /** List of the values of said atributes (Values of the JSON keys provided in the constructor) */
  readonly values: any[];

  constructor(json: JSON) {
    super();

    const atributes: string[] = [];
    const values: any[] = [];

    for (const key in json) {
      atributes.push(key);
      values.push(json[key]);
    }

    this.atributes = atributes;
    this.values = values;
  }

  toString(): string {
    return `DatabaseConditions(
      atributes: ${this.atributes},
      values: ${this.values},
    );`;
  }

  /** i.e. 'atributeOne, atributeTwo' */
  atributesToString(): string {
    let result: string = '';

    for (let i = 0; i < this.atributes.length; i++) {
      result += this.atributes[i];
      if (i != this.atributes.length - 1) {
        result += ', ';
      }
    }

    return result;
  }

  /** i.e. '?, ?' */
  placeholdersToString(): string {
    let result: string = '';

    for (let i = 0; i < this.atributes.length; i++) {
      result += '?';
      if (i != this.atributes.length - 1) {
        result += ', ';
      }
    }

    return result;
  }

  /** i.e. 'atributeOne = 1, atributeTwo = 2' */
  atributesAndValuesToString(): string {
    let result: string = '';

    for (let i = 0; i < this.atributes.length; i++) {
      result += `${this.atributes[i]} = ${this.values[i] ?? ''}`;
      if (i != this.atributes.length - 1) {
        result += ', ';
      }
    }

    return result;
  }

  copyWith(): DatabaseConditions { throw new UnimplementedError(); }
  toJson(): JSON { throw new UnimplementedError() }
}