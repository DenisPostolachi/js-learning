const list = document.querySelector('#user-list ul');
const forms = document.forms;
const deleteButtonsStatic = document.querySelectorAll('.delete');


// добавляет
const addForm = forms['add-user'];

//todo ()=> ??
addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // создает
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const userName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // текст-контент
    userName.innerText = value;
    deleteBtn.innerText = 'delete';

    // классы
    userName.classList.add('name');
    deleteBtn.classList.add('delete');

    // вставляет в дом
    //todo .append
    li.append(userName);
    li.append(deleteBtn);
    list.append(li);
    addForm.reset();


    deleteBtn.addEventListener('click', (e) => {
        // todo добавить обработчик на кнопку и удалить парент
            const parentElement = e.target.parentElement;
            parentElement.parentNode.removeChild(parentElement);
    });
});

deleteButtonsStatic.forEach((item) => {
    item.addEventListener('click', (e) => {
        // todo добавить обработчик на кнопку и удалить парент
            const parentElement = e.target.parentElement;
            parentElement.parentNode.removeChild(parentElement);
    });
})
