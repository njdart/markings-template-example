
/**
 * module - export a function that will modify any existing syntaxes
 *
 * @param  {type} taskDefs description
 * @return {type}          description
 */
module.exports.default = function(taskDefs) {

  // We ignore any existing taskDefs, this is intended as a bootstrap function for the markdown

  taskDefs.tasks[exampleTaskName] = exampleTask;

  return {
    taskOrder: taskDefs.taskOrder.concat(['exampleTaskName']),
    tasks: taskDefs.tasks
  };

};

function exampleTaskName(txt) {
  return '\n\n<h1>Modifying Text is Easy!</h1>\n\n' + txt;
};
