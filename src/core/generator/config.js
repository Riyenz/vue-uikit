module.exports = {
  appPath: 'src/app.js',
  scssComponentsPath: 'scss/_components.scss',
  blueprintsFolderPath: 'blueprints',
  acceptedExtension: '.hbs',
  requiredOptions: ['action', 'scope', 'name'],
  argIndex: {
    action: 2, // generate
    scope: 3, // component
    name: 4, // Component Name
  },
  scopeTypes: {
    component: ['c', 'component'],
  },
  componentBlueprints: [
    {
      format: 'pascalcase',
      src: 'src/core/generator/blueprints/component',
      dest: 'src/UIKit',
      hasFolder: true,
    },
    {
      format: 'lowercase',
      src: 'src/core/generator/blueprints/component/scss',
      dest: 'scss/components',
      prefix: '_',
    },
    {
      format: 'pascalcase',
      src: 'src/core/generator/blueprints/component/test',
      dest: 'tests/unit/components',
    },
  ],
};
