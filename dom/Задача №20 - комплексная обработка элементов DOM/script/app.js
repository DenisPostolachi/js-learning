const list = document.querySelector('#user-list ul');
const forms = document.forms;
const deleteButtonsStatic = document.querySelectorAll('.delete');


// добавляет
const addForm = forms['add-user'];

addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // создает
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const userName = document.createElement('span');
    const deleteBtn = document.createElement('span');


    if (!value) {
        return  e.submitter.disabled === 'true'
    }

    // текст-контент
    userName.innerText = value;
    deleteBtn.innerText = 'delete';

    // классы
    userName.classList.add('name');
    deleteBtn.classList.add('delete');

    // вставляет в дом
    li.append(userName, deleteBtn);
    list.append(li);
    addForm.reset();


    deleteBtn.addEventListener('click', (e) => {
        const parentElement = e.target.parentElement;
        parentElement.parentNode.removeChild(parentElement);
    });

});

deleteButtonsStatic.forEach((item) => {
    item.addEventListener('click', (e) => {
        const parentElement = e.target.parentElement;
        parentElement.parentNode.removeChild(parentElement);
    });
})
