/**
 * A Sample Hello (World!) class
 */
class Hello {

  /** @private */
  private _target: string;


  /**
   * @constructor
   * @param {string} [target="World"]
   */
  constructor(target: string = "World") {
    this._target = target;
  }


  /**
   * Greet the target.
   * @returns {string}
   */
  greet(): string {
    return "Hello " + this._target + "!";
  }

}


// exports
export = Hello;