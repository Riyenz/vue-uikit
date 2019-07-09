const {
  camelCase,
  upperFirst,
  toLower,
} = require('lodash');

module.exports = function StringHelper(str) {
  return {
    str,
    removeBlueprintExt() {
      this.str = this.str.split('.').slice(0, -1).join('.');
      return this;
    },
    appendString(aStr) {
      this.str = `${aStr}${this.str}`;
      return this;
    },
    format(format) {
      switch (format) {
      case 'pascalcase':
        this.str = upperFirst(camelCase(this.str));
        break;
      case 'lowercase':
        this.str = toLower(this.str);
        break;
      default:
        this.str = upperFirst(camelCase(this.str)); // default 'pascalcase'
        break;
      }
      return this;
    },
    output() {
      return this.str;
    },
  };
};
