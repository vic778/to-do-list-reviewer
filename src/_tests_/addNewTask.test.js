/**
 * @jest-environment jsdom
 */

import generateID from '../_mocks_/addNewTask.js';
import localStorageMock from '../_mocks_/localStorage.js';

describe('Add new task to the list', () => {
  const tasks = [];
  test('Add an entry to the todo list', () => {
    document.body.innerHTML = '<input id=\'addTask\' value=\'complete-project\'/>';
    generateID(tasks);
    expect(tasks).toHaveLength(1);
  });
  test('Local Storage should be updated for every input', () => {
    expect(localStorageMock.getItem('todo')).toHaveLength(1);
  });
  test('Add a second entry to the todo list', () => {
    document.body.innerHTML = '<input id=\'addTask\' value=\'complete-second\'/>';
    generateID(tasks);
    expect(tasks[1].index).toBe(2);
  });
});
