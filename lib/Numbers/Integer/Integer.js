import Calculable from "../Calculable";

/**
 * Create integer value
 * @class
 */
export default class Integer extends Calculable {
  
  static MAX_VALUE = 2147483647;

  static MIN_VALUE = -2147483648;

  /**
   * @private
   */
  _value;

  /**
   * Generates an integer for that value.
   * If no value is given, a random integer between -100 and 100 is generated.
   * @param {number} [value] value
   */
  constructor(value) {
    if(!value) {
      value = Math.floor(Math.random() * 201) - 100;
    }
    this._value = Math.floor(value);
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = Math.floor(newValue);
  }

  /**
   * 
   * @returns {string}
   */
  toString() {
    return this._value.toString();
  }
}
