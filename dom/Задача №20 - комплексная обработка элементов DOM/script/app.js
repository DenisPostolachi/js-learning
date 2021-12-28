const list = document.querySelector('#user-list ul');
const forms = document.forms;

// удаляет
list.addEventListener('click', (e) => {
    // todo добавить обработчик на кнопку и удалить парент
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

// добавляет
const addForm = forms['add-user'];

//todo ()=> ??
addForm.addEventListener('submit', function(e){
    e.preventDefault();

    // создает
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const userName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // текст-контент
    userName.textContent = value;
    deleteBtn.textContent = 'delete';

    // классы
    userName.classList.add('name');
    deleteBtn.classList.add('delete');

    // вставляет в дом
    //todo .append
    li.appendChild(userName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});
