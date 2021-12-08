import localStorageMock from './localStorage.js';

function deleteItem(todo, tasks) {
  const { index } = todo;
  const currentTasks = tasks.filter((todo) => todo.index !== index);
  tasks.forEach((object, index) => {
    object.index = index + 1;
  });
  localStorageMock.setItem('todo', currentTasks);
  return currentTasks;
}
export default deleteItem;