
const Path = require('path');

module.exports.default = function rootTemplate(template) {

  template.abstract = false;

  template.sections.push({
    name: 'Intended Audience header',
    markdown: '# Intended Audience'
  });

  template.sections.push(this.requireUserContent({
    name: 'Intended Audience body',
    file: 'intendedAudience.md',
    onMissing() {
      return `<div class="balloon warn">
                <h2>Intended Audience is missing</h2>
              </div>`;
    }
  }));

  template.sections.push({
    name: 'Introduction head',
    markdown: '# Intruduction'
  });

  template.sections.push(this.requireUserContent({
    name: 'Introduction body',
    file: 'introduction.md',
    onMissing() {
      return `<div class="balloon warn">
                <h2>Introduction is missing</h2>
              </div>`;
    }
  }));

  template.sections.push({
    name: 'Analysis header',
    markdown: '# Analysis'
  });

  template.sections.push(this.requireUserContent({
    name: 'Analysis body',
    file: 'analysis.md',
    onMissing() {
      return `<div class="balloon warn">
                <h2>Analysis is missing</h2>
              </div>`;
    }
  }));

  template.sections.push({
    name: 'Solution header',
    markdown: '# Solution'
  });

  template.sections.push(this.requireUserContent({
    name: 'Solution body',
    file: 'solution.md',
    onMissing() {
      return `<div class="balloon warn">
                <h2>Solution is missing</h2>
              </div>`;
    }
  }));

  template.sections.push({
    name: 'Conclusion header',
    markdown: '# Conclusion'
  });

  template.sections.push(this.requireUserContent({
    name: 'Conclusion body',
    file: 'conclusion.md',
    onMissing () {
      return `<div class="balloon warn">
                <h2>Conclusion is missing</h2>
              </div>`;
    }
  }));

  console.log(template);

  return template;
}
