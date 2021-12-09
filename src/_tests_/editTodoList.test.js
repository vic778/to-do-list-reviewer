import localStorageMock from '../_mocks_/localStorage.js';

const { checkCompleted } = require('../_mocks_/editTodoList.js');

describe(' checking status completed localstorage', () => {
  document.body.innerHTML = `
          <li class="list-container d-flex">
            <input type="checkbox" class="checkbox" checked>
            <p class="items show"   contenteditable="true">Hello Todo's</p>
            <i class="fas fa-ellipsis-v  dots"></i>
            <i class="far fa-trash-alt show delete"></i>
          </li>
          <button class="btn">Clear all Completed</button>
          `;
  test('function to check the complete statues false', () => {
    const list = localStorageMock;
    // addTodoToList('take a break', false, 0, list);
    const task = document.querySelector('.items').innerText;
    const element = document.querySelector('.checkbox');
    const bool = false;
    checkCompleted(list, task, element, bool);
    const jsonId = '0';
    const newJson = { completed: 'false' };
    localStorageMock.setItem(jsonId, newJson);
    // expect(localStorageMock.getItem(jsonId)).toEqual({"data": "json data"});
    expect(localStorageMock.getItem(jsonId)).toEqual({ completed: 'false' });
  });

  test(' function to check the complete status true', () => {
    const jsonId = '1';
    const newJson = { completed: 'true' };
    localStorageMock.setItem(jsonId, newJson);
    expect(localStorageMock.getItem(jsonId)).toEqual({ completed: 'true' });
  });

  test('clear all function check', () => {
    let list = localStorageMock;
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
      list = [list].filter((item) => item.completed === false);
      expect(list).toBe(0);
    });
  });
  test('Editing tesk', () => {
    document.body.innerHTML = ' <p class="items"  contenteditable="true">Hello Todo\'s</p>';
    const edit = document.querySelector('.items');
    expect(edit.innerHTML).toBe("Hello Todo's");
  });
});

afterEach(() => {
  window.localStorage.clear();
});
