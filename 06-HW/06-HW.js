const todoList = [
    { todo: "Wake up at 7AM", done: false },
    { todo: "Do your homework", done: true }
  ];
  
  function addTask(todo, done = false) {
    if (typeof todo !== 'string') {
      throw new Error('todo must be a string');
    }
  
    if (typeof done !== 'boolean') {
      throw new Error('done status must be typeof boolean');
    }
  
    todoList.push({ todo, done });
    return todoList;
  }
  
  function removeTask(index) {
    if (typeof index !== 'number' || index < 0 || index >= todoList.length) {
      throw new Error('Incorrect index');
    }
  
    const removedTask = todoList.splice(index, 1)[0]; 
    return removedTask;
  }
  
  function markTaskAsDone(index) {
    if (typeof index !== 'number' || index < 0 || index >= todoList.length) {
      throw new Error('Incorrect index');
    }
  
    todoList[index].done = true;
    return todoList;
  }
  
  module.exports = {
    addTask,
    removeTask,
    markTaskAsDone,
    todoList
  };