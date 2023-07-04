// document.addEventListener('DOMContentLoaded', () => {
//   checkEmptyList();
// });

// function createTaskItem(taskName) {
//   const taskItem = document.createElement('li');
//   taskItem.classList.add('task');

//   const taskContainer = document.createElement('div');
//   taskContainer.classList.add('task-container');
//   taskItem.appendChild(taskContainer);

//   const textContainer = document.createElement('div');
//   textContainer.classList.add('text-container');
//   taskContainer.appendChild(textContainer);

//   const taskText = document.createElement('li');
//   taskText.textContent = taskName;
//   textContainer.appendChild(taskText);

//   const actionContainer = document.createElement('div');
//   actionContainer.classList.add('action-container');
//   taskContainer.appendChild(actionContainer);

//   const deleteButton = document.createElement('button');
//   deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
//   deleteButton.classList.add('delete-button');
//   deleteButton.addEventListener('click', () => {
//     taskItem.remove();
//     checkEmptyList();
//   });
//   actionContainer.appendChild(deleteButton);

//   addEditButton(taskItem, taskText, textContainer, actionContainer);

//   if (todoList.childElementCount === 0) {
//     checkEmptyList();
//   }
//   return taskItem;
// }

// function createDeleteAllButton() {
//   const deleteAllButton = document.createElement('button');
//   deleteAllButton.id = 'delete-all';
//   deleteAllButton.innerHTML = 'Clear All <i class="fa-solid fa-eraser"></i>';

//   deleteAllButton.style.display = 'none';

//   deleteAllButton.addEventListener('click', () => {
//     todoList.innerHTML = '';
//     deleteAllButton.style.opacity = '0';
//     deleteAllButton.style.transition = 'opacity 2s ease';

//     setTimeout(() => {
//       deleteAllButton.remove();
//     }, 2000);
//   });

//   return deleteAllButton;
// }

// function addEditButton(taskItem, taskText, textContainer, actionContainer) {
//   const editButton = document.createElement('button');
//   editButton.classList.add('edit-button');
//   editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
//   editButton.addEventListener('click', () => {
//     const inputField = document.createElement('input');
//     inputField.value = taskText.textContent;
//     taskItem.style.transition = 'all 0.5s ease-in';
//     textContainer.replaceChild(inputField, taskText);
//     inputField.focus();

//     inputField.addEventListener('blur', () => {
//       taskText.textContent = inputField.value;
//       textContainer.replaceChild(taskText, inputField);
//     });
//   });
//   textContainer.appendChild(editButton);
// }

// function checkEmptyList() {
//   deleteAllButton = document.getElementById('delete-all');

//   if (todoList.childElementCount === 0) {
//     if (!deleteAllButton) {
//       const newDeleteAllButton = createDeleteAllButton();
//       deleteAllButton = newDeleteAllButton;
//       todoList.parentNode.insertBefore(
//         newDeleteAllButton,
//         todoList.nextSibling
//       );
//     }
//   } else {
//     deleteAllButton.style.display = 'block';
//   }
// }

// const todoForm = document.querySelector('#todo-form'),
//   todoInput = document.querySelector('#todo-input'),
//   todoList = document.querySelector('#todo-list');
// let deleteAllButton = document.getElementById('delete-all');

// todoForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const taskName = todoInput.value.trim();

//   if (taskName.trim() !== '') {
//     const taskItem = createTaskItem(taskName);
//     todoList.appendChild(taskItem);

//     todoInput.value = '';
//     checkEmptyList();
//   }
// });

// deleteAllButton.style.display = 'none';

// deleteAllButton.addEventListener('click', () => {
//   todoList.innerHTML = '';
//   deleteAllButton.style.opacity = '0';
//   deleteAllButton.style.transition = 'opacity 2s ease';
//   setTimeout(() => {
//     deleteAllButton.remove();
//   }, 2000);
// });

document.addEventListener('DOMContentLoaded', () => {
  checkEmptyList();
});

function createTaskItem(taskName) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task');

  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');
  taskItem.appendChild(taskContainer);

  const taskText = document.createElement('span');
  taskText.textContent = taskName;
  taskContainer.appendChild(taskText);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    taskItem.remove();
    checkEmptyList();
  });
  taskContainer.appendChild(deleteButton);

  addEditButton(taskItem, taskText, taskContainer);

  if (todoList.childElementCount === 0) {
    deleteAllButton.style.display = 'block';
  }
  return taskItem;
}

function createDeleteAllButton() {
  const deleteAllButton = document.createElement('button');
  deleteAllButton.id = 'delete-all';
  deleteAllButton.innerHTML = 'Clear All <i class="fa-solid fa-eraser"></i>';

  deleteAllButton.style.display = 'none';

  deleteAllButton.addEventListener('click', () => {
    todoList.innerHTML = '';
    deleteAllButton.style.opacity = '0';
    deleteAllButton.style.transition = 'opacity 2s ease';

    setTimeout(() => {
      deleteAllButton.remove();
    }, 2000);
  });

  return deleteAllButton;
}

function addEditButton(taskItem, taskText, taskContainer) {
  const editButton = document.createElement('button');
  editButton.classList.add('edit-button');
  editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  editButton.addEventListener('click', () => {
    const inputField = document.createElement('input');
    inputField.value = taskText.textContent;
    inputField.style.fontSize = '23px';
    inputField.style.padding = '10px';
    inputField.style.borderRadius = '25px';
    taskItem.classList.add('fadeIn');
    taskItem.style.transition = 'all 0.5s ease-in';
    taskContainer.replaceChild(inputField, taskText);
    inputField.focus();

    inputField.addEventListener('focusout', () => {
      taskText.textContent = inputField.value;
      taskContainer.replaceChild(taskText, inputField);
    });
  });
  taskContainer.appendChild(editButton);
}

const todoForm = document.querySelector('#todo-form'),
  todoInput = document.querySelector('#todo-input'),
  todoList = document.querySelector('#todo-list'),
  deleteAllButton = document.querySelector('#delete-all');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskName = todoInput.value.trim();

  if (taskName !== '') {
    const taskItem = createTaskItem(taskName);
    todoList.appendChild(taskItem);

    todoInput.value = '';
    checkEmptyList();
  }
});

deleteAllButton.style.display = 'none';

deleteAllButton.addEventListener('click', () => {
  todoList.innerHTML = '';
  deleteAllButton.style.opacity = '0';
  deleteAllButton.style.transition = 'opacity 2s ease';
  setTimeout(() => {
    deleteAllButton.remove();
  }, 2000);
});
