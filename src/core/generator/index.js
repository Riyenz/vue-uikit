const {
  requiredOptions,
  argIndex,
  scopeTypes,
} = require('./config');
const TemplateFactory = require('./TemplateFactory');

if (process.argv.length < 5) {
  const errorMessage = `'<${requiredOptions.join('> <')}>' are required`;
  throw new Error(errorMessage);
}

/** ACTION_TYPE is reserved for future actions(update, delete) */
// const ACTION_TYPE = process.argv[argIndex.action]; // blueprint folder that contains the template files

const SCOPE_NAME = process.argv[argIndex.name]; // filename of the scope
const SCOPE_TYPE = process.argv[argIndex.scope]; // blueprint folder that contains the template files

if (scopeTypes.component.includes(SCOPE_TYPE)) {
  TemplateFactory.createTemplateFor(SCOPE_TYPE, SCOPE_NAME);
}
