const fs = require('fs');
const handlebars = require('./../handlebars');

class ComponentBuilder {
  async parseFile({ src, fileName, fileData }) {
    try {
      const template = await fs.readFileSync(`${src}/${fileName}`, {
        encoding: 'utf-8',
      });
      const handlebarsParser = handlebars.compile(template);

      return handlebarsParser(fileData);
    } catch (err) {
      throw new Error(`ComponentBuilder: ${err}`);
    }
  }

  async writeFile({ destination, fileName, content }) {
    this.createFolder(destination);
    return fs.writeFileSync(`${destination}/${fileName}`, content);
  }

  createFolder(folder) {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  }
}

module.exports = ComponentBuilder;
