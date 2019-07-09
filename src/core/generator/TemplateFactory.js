const ComponentTemplate = require('./templates/ComponentTemplate');
const TemplateGenerator = require('./TemplateGenerator');

class TemplateFactory {
  static createTemplateFor(scopeType, scopeName) {
    if (scopeType) {
      return new TemplateGenerator(new ComponentTemplate(scopeName));
    }

    return false;
  }
}

module.exports = TemplateFactory;
