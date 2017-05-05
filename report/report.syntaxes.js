
module.exports.default = (taskDefs) => {

  let taskOrder = taskDefs.taskOrder;
  let tasks = taskDefs.tasks;

  taskOrder.push('buildReferences');
  tasks['buildReferences'] = {
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

  return {
    tasks,
    taskOrder
  }
};