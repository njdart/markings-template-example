
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

  template.abstract = true;
  template.sections.push({
    name: 'Header',
    file: './header.md',
    // template: '# markdown string'
    expectedContent: {
      before: {
        file: 'beforeContent.md', // will be created
        onMissing: () => {
          return '<h1>This text will be substituted for the missing content!</h1>';
        }
      },
      after: {
        file: 'afterContent.md',
        onMissing: () => {
          return '<h1>This text will be substituted for the missing content!</h1>';
        }
      }
    },
  });

  return template;
}
