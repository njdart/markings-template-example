// const desync = require('deasync');
const git = require('simple-git');

const simpleGit = git('/home/nic/git/njdart/markings/example-documents');

module.exports.default = (taskDefs) => {

  let taskOrder = taskDefs.taskOrder;
  let tasks = taskDefs.tasks;

  // tasks['buildReferences'] = buildPreferences;
  // taskOrder.push('buildReferences');

  tasks['history'] = history
  taskOrder.splice(taskOrder.indexOf('preParseCleanup') + 1, 0, 'history');

  return {
    tasks,
    taskOrder
  }
};

const history = {
  runTasksBefore: [],
  runTasksAfter: [],
  runBeforesIfDependency: false,
  runAftersIfDependency: false,
  disabled: false,
  syntaxes: [
    {
      name: 'git version',
      disabled: false,
      do: (text) => {

        return text.replace(/\[\[git(?:-|[ \t]+)version[ \t]*(.*?)\]\]/gi, (match, args) => {

          let rows = '';

          changeSets.all.forEach((changeSet) => {
            rows += '<tr>'
                  // + `<td>${changeSet.hash}</td>`
                  + `<td>${changeSet.date}</td>`
                  + `<td>${changeSet.message}</td>`
                  // + `<td>${changeSet.author_name}</td>`
                  // + `<td>${changeSet.author_email}</td>`
                  + '</tr>';
          });

          return '<table class="versionControlTable">'
               + '  <thead>'
               + '    <tr>'
              //  + '      <td>hash</td>'
               + '      <td>date</td>'
               + '      <td>message</td>'
              //  + '      <td>author_name</td>'
              //  + '      <td>author_email</td>'
               + '    </tr>'
               + '  </thead>'
               + '  <tbody>'
               + `    ${rows}`
               + '  </tbody>'
               + '</table>\n';

        //   console.log('Replacing version strings', match);
        //
        //   let gitArgs = [];
        //   let done = false;
        //   let result;
        //
        //   if (!args || args.trim().length < 1) {
        //     gitArgs.push('-5');
        //   } else {
        //     args = args.split(',').map((arg) => arg.trim().toLowercase()).forEach((arg) => {
        //
        //       let m;
        //
        //       if (m = arg.match(/max[ \t]*\(?([0-9]+)\)?/i)) {
        //         gitArgs.push(`-${m[1]}`);
        //       }
        //
        //     });
        //   }
        //
        //   simpleGit.log(gitArgs, (_err, _result) => {
        //     console.log('simpleGit', _err, _result);
        //     if (_err) {
        //       this.logger.error(_err, 'Failed to get git status');
        //       console.error(_err)
        //     }
        //     result = _result;
        //     done = true;
        //   });
        //
        //   // deasync.loopWhile(() => {
        //   //   return !done;
        //   // });
        //   while(!done) {
        //     console.log('waiting');
        //   };
        //
        //   if (!result) {
        //     return match;
        //   }
        //
        //   let rows = '';
        //
        //   result.all.forEach((changeSet) => {
        //     rows +=  `<tr>
        //                 <td>${changeSet.hash}</td>
        //                 <td>${changeSet.date}</td>
        //                 <td>${changeSet.message}</td>
        //                 <td>${changeSet.author_name}</td>
        //                 <td>${changeSet.author_email}</td>
        //               </tr>`
        //   });
        //
        //   console.log(rows);
        //
        //   return text + `<table>
        //                   <thead>
        //                     <tr>
        //                       <td>hash</td>
        //                       <td>date</td>
        //                       <td>message<td>
        //                       <td>author_name<td>
        //                       <td>author_email<td>
        //                     </tr>
        //                   </thead>
        //                   <tbody>
        //                     ${tbody}
        //                   </tbody>
        //                 </table>\n`;
        //
        });
      }
    }
  ]
}

let changeSets;

simpleGit.log(['-5'], (err, result) => {
  changeSets = result;
});

const buildPreferences = {
  runTasksBefore: [],
  runTasksAfter: [],
  runBeforesIfDependency: false,
  runAftersIfDependency: false,
  disabled: false,
  syntaxes: [
    {
      name: 'extractReferencesFromATags',
      disabled: false,
      do: (text) => {

        let tbody = '';

        let match = text.match(/<a[^>]+href="[^"]+?"[^>]*?.+?<\/a>/gi)

        if (!match) {
          return text;
        }

        console.log(match);

        match.forEach((find) => {
          let href = find.match(/href="([^"]*)"/i);

          if (!href) {
            return;
          }

          let title = find.match(/title="([^"]*)"/i) || [];
          let text = find.match(/>([^<]+)</) || [];

          tbody += `<tr>
                      <td>${href[1]}</td>
                      <td>${title[1] || ''}</td>
                      <td>${text[1] || ''}</td>
                    </tr>\n`;
        });

        console.log(tbody);
        return text + `<table>
                        <thead>
                          <tr>
                            <td>URL</td>
                            <td>Title</td>
                            <td>Description<td>
                          </tr>
                        </thead>
                        <tbody>
                          ${tbody}
                        </tbody>
                      </table>\n`;
      }
    }
  ]
}
