/* eslint no-console: 0, import/no-extraneous-dependencies: 0 */

const path = require('path');
const fs = require('fs-extra');
const handlebars = require('./handlebars');
const StringHelper = require('./helpers/StringHelper');
const { acceptedExtension } = require('./config');

/**
 * TemplateGenerator
 */
class TemplateGenerator {
  /**
   *
   * @param options
   */
  constructor(options) {
    this.generate(options);
  }

  /**
   *
   * @param options
   * @private
   */
  generate(options) {
    const { name, blueprints } = options;

    blueprints.forEach(async (blueprint) => {
      const blueprintFiles = await this.getBlueprintFiles(blueprint);
      await this.createFiles(name, blueprintFiles, blueprint);
    });

    options.hooks();
  }

  /**
   *
   * @param blueprint
   * @private
   */
  getBlueprintFiles(blueprint) {
    return fs
      .readdirSync(blueprint.src)
      .filter(file => path.extname(file) === acceptedExtension);
  }

  /**
   *
   * @param name
   * @param blueprintFiles
   * @param blueprint
   * @private
   */
  createFiles(name, blueprintFiles, blueprint) {
    blueprintFiles.forEach(async (file) => {
      await this.createFile(name, file, blueprint);
    });
  }

  /**
   *
   * @param name
   * @param file
   * @param blueprint
   * @private
   */
  async createFile(name, file, blueprint) {
    const dest = this.createFilePath(name, file, blueprint);
    await fs.outputFileSync(
      dest,
      await this.compileTemplate(blueprint.src, file, { scopeName: name }),
    );

    console.log('\x1b[0m', 'created', '\x1b[36m', dest);
  }

  /**
   *
   * @param name
   * @param file
   * @param blueprint
   * @returns {*}
   * @private
   */
  createFilePath(name, file, blueprint) {
    const firstName = StringHelper(name)
      .format(blueprint.format)
      .output();
    const folder = blueprint.hasFolder
      ? `/${blueprint.folderPrefix || ''}${firstName}`
      : '';
    return `${blueprint.dest}${folder}/${this.fileName(firstName, file, blueprint)}`;
  }

  /**
   *
   * @param firstName
   * @param file
   * @param blueprint
   * @returns string
   * @private
   */
  fileName(firstName, file, blueprint) {
    const prefix = blueprint.prefix || '';

    if (file.split('.')[0] === 'index') return StringHelper(file).removeBlueprintExt().output();

    return StringHelper(file)
      .removeBlueprintExt()
      .appendString(`${prefix}${firstName}.`)
      .output();
  }

  /**
   *
   * @param src
   * @param fileName
   * @param fileData
   * @returns string
   * @private
   */
  async compileTemplate(src, fileName, fileData) {
    try {
      const template = await fs.readFileSync(`${src}/${fileName}`, {
        encoding: 'utf-8',
      });
      const handlebarsParser = handlebars.compile(template);

      return handlebarsParser(fileData);
    } catch (err) {
      throw new Error(`TemplateGenerator: ${err}`);
    }
  }
}

module.exports = TemplateGenerator;
