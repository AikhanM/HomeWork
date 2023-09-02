const { addTask, removeTask, markTaskAsDone, todoList } = require("./06-HW");

describe("All the functions", () => {
  test("all functions should be defined", () => {
    expect(addTask).toBeDefined();
    expect(removeTask).toBeDefined();
    expect(markTaskAsDone).toBeDefined();
  });

  describe("Add task function: ", () => {
    let array = todoList.slice();

    test("should add an object of task to the array", () => {
      expect(addTask("task", true)).toHaveLength(array.length + 1);
      expect(addTask("task", false)).toHaveLength(array.length + 2);
    });

    test("task description must be typeof string", () => {
      expect(() => addTask(15, true)).toThrow();
      expect(() => addTask(undefined, false)).toThrow();
    });

    test("task done status must be typeof boolean", () => {
      expect(() => addTask("task", 15)).toThrow();
      expect(() => addTask("task", "true")).toThrow();
    });
  });

  describe("Remove task function: ", () => {
        
    test("should work with argument typeof number", () => {
      expect(() => removeTask("0")).toThrow();
      expect(() => removeTask(undefined)).toThrow();
    });

    test("should not work with index that is not exist in array", () => {
      expect(() => removeTask(10)).toThrow();
    });
  });

  describe("Mark task as done function: ", () => {
    test("should change done status of array element to true", () => {
      let res = [
        { todo: "task", done: true },
        { todo: "task", done: true },
      ];

      expect(markTaskAsDone(0)).toEqual(expect.arrayContaining(res));
    });

    test("should work with argument typeof number", () => {
      expect(() => markTaskAsDone(true)).toThrow();
      expect(() => markTaskAsDone(" ")).toThrow();
    });

    test("should not work with index that is not exist in array", () => {
      expect(() => markTaskAsDone(10)).toThrow();
    });
  });
});