/* eslint no-console: 0, import/no-extraneous-dependencies: 0 */

const fs = require('fs-extra');
const {
  componentBlueprints,
  appPath,
  scssComponentsPath,
  demoRoutesPath,
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
    this.importDemo();
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

  importDemo() {
    const displayName = StringHelper(this.name).format('capitalize').output();
    const pathName = StringHelper(this.name).format('kebabcase').output();

    fs.readFile(demoRoutesPath, 'utf8', (err, data) => {
      const arr = data.slice(16, data.length).split('},');
      const insertIndex = arr.map((str) => {
        const start = str.indexOf('\'') + 1;
        const end = str.indexOf('\'', start);

        return str.slice(start, end);
      }).reduce((acc, cur, index) => {
        return cur < this.name && index !== arr.length - 1 ? index + 1 : acc;
      }, arr.length - 1);

      arr.splice(
        insertIndex,
        0,
        // eslint-disable-next-line max-len
        `\n  {\n    path: '${pathName}',\n    name: 'demo-${pathName}',\n    displayName: '${displayName}',\n    component: () => import('./views/pages/Demo${displayName}/index.vue'),\n  `,
      );

      fs.writeFile(demoRoutesPath, `export default [${arr.join('},')}`, (writeError) => {
        if (writeError) {
          console.log(err);
          return;
        }

        console.log(
          '\x1b[32m',
          'updated',
          '\x1b[36m',
          demoRoutesPath,
        );
      });
    });
  }
}

module.exports = ComponentTemplate;
