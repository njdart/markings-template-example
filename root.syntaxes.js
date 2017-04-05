
/**
 * module - export a function that will modify any existing syntaxes
 *
 * @param  {type} taskDefs description
 * @return {type}          description
 */
module.exports.default = function(taskDefs) {

  let taskOrder = taskDefs.taskOrder;
  let tasks = taskDefs.tasks;

  tasks['exampleTask'] = {
    runTasksBefore: [],
    runTasksAfter: [],
    runBeforesIfDependency: false,
    runAftersIfDependency: false,
    disabled: false,
    syntaxes: [
      {
        name: 'An Example syntax in an example task',
        disabled: false,
        do: function(text) {
          return '\n\n<h1>Modifying Text is Easy!</h1>\n\n' + text;
        }
      }
    ]
  }

  taskOrder = taskOrder.concat(['exampleTask']);

  return {
    taskOrder,
    tasks
  };

};
