/* eslint no-console: 0, import/no-extraneous-dependencies: 0 */

const fs = require('fs-extra');
const {
  componentBlueprints,
  appPath,
  scssComponentsPath,
} = require('./../config');
const StringHelper = require('./../helpers/StringHelper');

class ComponentTemplate {
  constructor(name) {
    this.blueprints = componentBlueprints;
    this.name = name;
  }

  hooks() {
    this.importComponent();
    this.importStyle();
  }

  importComponent() {
    const componentName = StringHelper(this.name)
      .format('pascalcase')
      .output();

    fs.appendFile(appPath,
      `\n/** ${componentName} Component */\n`
      + `export { default as ${componentName} } from '@/UIKit/${componentName}/${componentName}.component.vue';\n`,
      (err) => {
        if (err) throw err;

        console.log(
          '\x1b[32m',
          'updated',
          '\x1b[36m',
          appPath,
        );
      });
  }

  importStyle() {
    const styleName = StringHelper(this.name)
      .format('lowercase')
      .output();

    fs.appendFile(scssComponentsPath, `@import "components/${styleName}";\n`, (err) => {
      if (err) throw err;

      console.log(
        '\x1b[32m',
        'updated',
        '\x1b[36m',
        scssComponentsPath,
      );
    });
  }
}

module.exports = ComponentTemplate;
