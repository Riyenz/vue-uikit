module.exports = function handlebarsRegister(handlebars) {
  handlebars.registerHelper('toLowerCase', str => str.toLowerCase());

  handlebars.registerHelper('toUpperCase', str => str.toUpperCase());
};
