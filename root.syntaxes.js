
/**
 * module - export a function that will modify any existing syntaxes
 *
 * @param  {type} taskDefs description
 * @return {type}          description
 */
module.exports.default = function(taskDefs) {

  let taskOrder = taskDefs.taskOrder;
  let tasks = taskDefs.tasks;

  tasks['exampleTaskName'] = (text) => {
    return '\n\n<h1>Modifying Text is Easy!</h1>\n\n' + txt;
  };

  taskOrder = taskOrder.concat(['exampleTaskName']);

  return {
    taskOrder,
    tasks
  };

};
