/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const ComponentBuilder = require('./models/componentBuilder');
const StringHelper = require('./models/stringHelper');

const {
  requiredOptions, argIndex, acceptedExtension, componentSettings, appPath,
} = require('./config');

if (process.argv.length < 5) {
  const errorMessage = `'<${requiredOptions.join('> <')}>' are required`;
  throw new Error(errorMessage);
}

/** ACTION_TYPE and SCOPE_TYPE is reserved for future actions(update, delete) and scope types(directives, modules, layouts) */
// const ACTION_TYPE = process.argv[argIndex.action]; // blueprint folder that contains the template files
// const SCOPE_TYPE = process.argv[argIndex.scope]; // blueprint folder that contains the template files

const SCOPE_NAME = process.argv[argIndex.name]; // filename of the scope

/** TODO: [UIKIT-37] needs to be refactored */
const cptMainBluprints = fs
  .readdirSync(componentSettings.src)
  .filter(file => path.extname(file) === acceptedExtension)
  .map((bpFileName) => {
    const stringHelper = new StringHelper(bpFileName);
    const fileName = stringHelper
      .removeBlueprintExt()
      .appendString(`${SCOPE_NAME}.`)
      .output();

    return {
      fileName,
      bpFileName,
      src: componentSettings.src,
      dest: `${componentSettings.dest}/${SCOPE_NAME}`,
    };
  });
const cptScssBlueprints = fs
  .readdirSync(`${componentSettings.src}/${componentSettings.subFiles.scss.src}`)
  .filter(file => path.extname(file) === acceptedExtension)
  .map((bpFileName) => {
    const stringHelper = new StringHelper(bpFileName);
    const fileName = stringHelper
      .removeBlueprintExt()
      .appendString(`_${SCOPE_NAME.toLowerCase()}s.`)
      .output();

    return {
      fileName,
      bpFileName,
      src: `${componentSettings.src}/${componentSettings.subFiles.scss.src}`,
      dest: componentSettings.subFiles.scss.dest,
    };
  });
const cptTestBlueprints = fs
  .readdirSync(`${componentSettings.src}/${componentSettings.subFiles.test.src}`)
  .filter(file => path.extname(file) === acceptedExtension)
  .map((bpFileName) => {
    const stringHelper = new StringHelper(bpFileName);
    const fileName = stringHelper
      .removeBlueprintExt()
      .appendString(`${SCOPE_NAME}.`)
      .output();

    return {
      fileName,
      bpFileName,
      src: `${componentSettings.src}/${componentSettings.subFiles.test.src}`,
      dest: componentSettings.subFiles.test.dest,
    };
  });

[
  ...cptMainBluprints,
  ...cptTestBlueprints,
  ...cptScssBlueprints,
].forEach(async (bp) => {
  const builder = new ComponentBuilder();
  const content = await builder.parseFile({
    src: bp.src,
    fileName: bp.bpFileName,
    fileData: {
      scopeName: SCOPE_NAME,
    },
  });

  builder.writeFile({
    fileName: bp.fileName,
    content,
    destination: bp.dest,
  });

  console.log(
    '\x1b[0m',
    'created',
    '\x1b[36m',
    `${bp.dest}/${bp.fileName}`,
  );
});

fs.appendFile(appPath, `
/** ${SCOPE_NAME} Component */
export { default as ${SCOPE_NAME} } from '@/UIKit/${SCOPE_NAME}/${SCOPE_NAME}.component.vue';
`, (err) => {
  if (err) throw err;

  console.log(
    '\x1b[32m',
    'updated',
    '\x1b[36m',
    appPath,
  );
});
