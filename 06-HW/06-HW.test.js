const { default: expect } = require('expect')
const { addTask, removeTask, markTaskAsDone, getPendingTasks, getCompletedTasks } = require('./06-HW')

describe('Function addTask', () => {
    test('Function should add Task', () => {
        expect(addTask('Wake up at 7AM')).toBeFalsy()
        expect(addTask('Make your bed',true)).toBeTruthy()
        expect(addTask('Make a breakfast')).toBeFalsy()
    })

  test('Function should check todoList', () => {
    expect(addTask('Wake up early')).toBeFalsy()
    expect(markTaskAsDone(0)).toBeTruthy()
  })
  
  test('Function should delete todoList', () => {
    expect(addTask('Go outside', true)).toBeTruthy()
    expect(removeTask(0))
  })
})