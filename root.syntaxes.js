
/**
 * module - export a function that will modify any existing syntaxes
 *
 * @param  {type} taskDefs description
 * @return {type}          description
 */
module.exports.default = function(taskDefs) {

  let taskOrder = taskDefs.taskOrder;
  let tasks = taskDefs.tasks;

  tasks['fillertexts'] = {
    runTasksBefore: [],
    runTasksAfter: [],
    runBeforesIfDependency: false,
    runAftersIfDependency: false,
    disabled: false,
    syntaxes: [
      {
        name: 'Samuel Lipsum',
        disabled: false,
        do: function(text) {
          return text.replace(/\n[ \t]{0,3}\[\[lorem\s+ipsum\]\][ \t]*\n/gi, `
            > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            > eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            > voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            > clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            > amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            > nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            > sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            > rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            > ipsum dolor sit amet.\n`.replace(/[ \t]{2,}/, ' '));
        }
      },
      {
        name: 'Samuel Lipsum',
        disabled: false,
        do: function(text) {
          return text.replace(/\n[ \t]{0,3}\[\[samuel\s+l\.?\s*ipsum\]\][ \t]*\n/gi, `
            > The path of the righteous man is beset on all sides by the iniquities of
            > the selfish and the tyranny of evil men. Blessed is he who, in the name of
            > charity and good will, shepherds the weak through the valley of darkness,
            > for he is truly his brother\'s keeper and the finder of lost children. And
            > I will strike down upon thee with great vengeance and furious anger those
            > who would attempt to poison and destroy My brothers. And you will know My
            > name is the Lord when I lay My vengeance upon thee.\n`.replace(/[ \t]{2,}/, ' '));
        }
      }
    ]
  };

  taskOrder = taskOrder.concat('fillertexts');

  return {
    taskOrder,
    tasks
  };

};
