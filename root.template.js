
/**
 * module - Root template for the example project
 *
 * @param  {Object} template template object to modify
 * @return {Object}          modified template object
 */
module.exports.default = function(template) {

  template.abstract = true;
  template.sections = template.sections.concat([
    {
      template: './header.md',
      replacable: false,
      extendable: false
    }
  ]);

  return template;
}
