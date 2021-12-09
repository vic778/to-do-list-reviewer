import localStorageMock from './localStorage.js';

function checkCompleted() {
  const editButtons = document.querySelectorAll('.description');
  editButtons.forEach((btn) => {
    btn.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });
  });
}
export default (e) => {
  const tasks = Storage.getItem('stock');
  const todoArray = JSON.parse(tasks);
  const todoObject = todoArray.find((x) => x.index === Number(e.target.parentElement.id));
  const index = todoArray.indexOf(todoObject);
  todoArray[index].description = e.target.textContent;
  localStorageMock.setItem('todo', tasks);
};
checkCompleted();
