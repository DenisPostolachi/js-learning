const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items');
let todos = [];

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo(todoInput.value);
});


const addTodo = item => {
    if (!item) {
        const todo = {
            id: Date.now(),
            name: item,
        };

        todos.push(todo);
        addToLocalStorage(todos);
        todoInput.value = '';
    }
}

const renderTodos = todos => {
    todoItemsList.innerHTML = '';
    todos.forEach((item) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);
        li.innerHTML = `<span>${item.name}</span><button class="delete-button">X</button>`;
        todoItemsList.append(li);
    });
}

const addToLocalStorage = todos => {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
}

const getFromLocalStorage = () => {
    const reference = localStorage.getItem('todos');

    if (reference) {
        todos = JSON.parse(reference);
        renderTodos(todos);
    }

}

const deleteTodo = id => {
    todos = todos.filter(item => item.id != id);
    addToLocalStorage(todos);
}

getFromLocalStorage();

todoItemsList.addEventListener('click', (event) => {

    if (event.target.classList.contains('delete-button')) {
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }

});