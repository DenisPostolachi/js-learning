// PUT чтобы полность структуру данных заменить, PATCH - точечная замена
const addTodoButton = document.getElementById('add-todo')

const getAllTodos = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        const todoItems = await res.json();
        todoItems.forEach(todo => renderTodo(todo))
    } catch (e) {
        console.log('server error')
    }
}

window.addEventListener('DOMContentLoaded', getAllTodos);

const renderTodo = ({id, completed, title}) => {
    try {
        const todoList = document.getElementById('todos')
        todoList.insertAdjacentHTML('beforeend', `
        <div class="form-check" id="todo${id}">
        <input type="checkbox" onchange="updateCheckBoxState(${id})" checked="${completed && 'checked'}">
        <p style="margin-right: 10px">${title}</p>
        <button onclick="deleteTodo(${id})" class="btn-close">Delete</button>
    </div>
    `);
    } catch (e) {
        console.log('server error')
    }
}

addTodoButton.addEventListener('click', async () => {
    try {
        const input = document.getElementById('form-text');
        let title = input.value;

        if (title) {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, completed: false})
            });

            const todoItem = await response.json();
            renderTodo(todoItem)
            input.value = ''
        }
    } catch (e) {
        console.log('server error')
    }
})

const deleteTodo = async id => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = response.json();

        if (data) {
            document.getElementById(`todo${id}`).remove();
        }
    } catch (e) {
        console.log('server error')
    }
}

const updateCheckBoxState = async id => {
    try {
        const checkBoxCompleted = document.querySelector(`#todo${id} input`).checked
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({checkBoxCompleted})
        })
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.log('server error');
    }
}
