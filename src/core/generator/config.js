module.exports = {
  blueprintsFolderPath: 'blueprints',
  acceptedExtension: '.hbs',
  requiredOptions: ['action', 'scope', 'name'],
  argIndex: {
    action: 2, // generate
    scope: 3, // component
    name: 4, // Component Name
  },
  cssPrefix: 'eduk',
  componentSettings: {
    src: 'src/core/generator/blueprints/component',
    dest: 'src/UIKit',
    subFiles: {
      scss: {
        src: 'scss',
        dest: 'scss/components',
      },
      test: {
        src: 'test',
        dest: 'tests/unit/components',
      },
    },
  },
};
