class StringHelper {
  constructor(str) {
    this.str = str;
  }

  removeBlueprintExt() {
    this.str = this.str.split('.').slice(0, -1).join('.');
    return this;
  }

  appendString(aStr) {
    this.str = `${aStr}${this.str}`;
    return this;
  }

  output() {
    return this.str;
  }
}

module.exports = StringHelper;
