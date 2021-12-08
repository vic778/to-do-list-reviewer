import localStorageMock from './localStorage.js';

function generateID(tasks) {
  const newTask = {
    description: document.getElementById('addTask').value,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  localStorageMock.setItem('todo', tasks);
}

export default generateID;
