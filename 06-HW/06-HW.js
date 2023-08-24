const todoList = [];

function addTask(task, done = false) {
    if(typeof task !== 'string'){
        throw new Error('It must be an string')
    }
    todoList.push({ task, done });
}

function removeTask(index) {
        if(index < 0 || index > todoList.length){
            throw new Error('Incorrect index')
        }
        todoList.splice(index, 1);
}

function markTaskAsDone(index) {
    if(index < 0 || index > todoList.length){
        throw new Error('Incorrect index')
    }
        todoList[index].done = true;
}

function getPendingTasks() {
    return todoList.filter(task => !task.done);
}

function getCompletedTasks() {
    return todoList.filter(task => task.done);
}

module.exports = {
    addTask,
    removeTask,
    markTaskAsDone,
    getPendingTasks,
    getCompletedTasks
};
