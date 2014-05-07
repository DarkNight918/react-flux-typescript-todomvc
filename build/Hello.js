/**
* A Sample Hello (World!) class
* @class Hello
*/
var Hello = (function () {
    /**
    * @constructs Hello
    * @param {string} [target="World"]
    */
    function Hello(target) {
        if (typeof target === "undefined") { target = "World"; }
        this._target = target;
    }
    /**
    * Greet the target.
    * @memberof Hello
    * @returns {string}
    */
    Hello.prototype.greet = function () {
        return "Hello " + this._target + "!";
    };
    return Hello;
})();

module.exports = Hello;
