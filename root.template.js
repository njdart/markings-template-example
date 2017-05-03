
const Path = require('path');

/**
 * module - Root template for the example project
 *
 * @param  {Object}   template template object to modify
 * @param  {Boolean}  [template.abstract=false] if true, this template will not be able ot produce a markdown document
 * @param  {Object[]} [template.sections=[]] a list of 'sections' in the document
 * @param  {String}   template.sections[].name A name for the section
 * @param  {String}   [template.sections[].file] a file that has the template to use
 * @param  {String}   [template.sections[].template] a template string (required if no templat file is provided)
 * @param  {Object}   [template.sections[].expectedContent]
 * @param  {String}   [template.sections[].expectedContent.before.file] the file to expect content in
 * @param  {Function} [template.sections[].expectedContent.before.onMissing] function to call if content is missing or
 * length is zero
 * @param  {Object}   [template.sections[].expectedContent.after]
 * @param  {String}   [template.sections[].expectedContent.after.file] the file to expect content in
 * @param  {Function} [template.sections[].expectedContent.after.onMissing] function to call if content is missing or
 * length is zero
 * @param  {function} [template.sections[].onMissing] a function to call if the expected content is missing
 * @return {Object}          modified template object
 */
module.exports.default = function rootTemplate(template) {

  template.abstract = false;
  template.sections = []; // reset any sections

  template.sections.push({
    name: 'Header',
    file: Path.join(__dirname, './header.md')
  });

  template.sections.push(this.requireUserContent({
    name: 'body',
    file: 'example-document.md',
    onMissing() {
      return '<h1 style="text-align: center;">Missing Main Content!</h1>';
    }
  }));

  template.sections.push({
    name: 'Footer',
    file: Path.join(__dirname, './footer.md')
  });

  return template;
}
