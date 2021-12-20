/*
let titles = document.getElementsByClassName('title');
Array.from(titles).forEach((item) => {
    console.log(item);
})
*/

/*
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);
*/

/*
let books = document.querySelector("#book-list li .name");
// console.log(books);
books = document.querySelectorAll('#book-list li .name');
// console.log(books);

Array.from(books).forEach((item) => {
    console.log(item);
})
*/

/*
let books = document.querySelectorAll('#book-list li .name');
books.forEach((items) => {
    items.textContent += ' (test)';
});

const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Replaced HTML</h2>'
bookList.innerHTML += '<h2>Added HTML</h2>'
*/

/*
const banner = document.querySelector('#page-banner');
console.log('#page-banner has child', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(false);
console.log(clonedBanner);
*/

/*
const bookList = document.querySelector('#book-list');
console.log('parent node is ', bookList.parentNode);
console.log('parent element is ', bookList.parentElement.parentElement);
console.log(bookList.children);
*/

/*
const bookList = document.querySelector('#book-list');
console.log('previous sibling is', bookList.previousElementSibling);
console.log('next sibling is', bookList.nextElementSibling);
bookList.previousElementSibling.querySelector('p').innerHTML += '<br> Test';
*/

/*
let h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e);
});
*/

/*
const buttons = document.querySelectorAll('#book-list .delete');
buttons.forEach((element) => {
    element.addEventListener('click', (e) => {

        const li = e.target.parentElement;
        li.parentNode.removeChild(li);

    });
});

const link = document.querySelector('#page-banner a');
link.addEventListener('click', (e) => {
   e.preventDefault();
});
*/

//delete books
const list = document.querySelector('#book-list ul');
list.addEventListener('click', (e) => {
    if (e.target.className === 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// console.log(document.forms['add-book']);


//add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', (e) => {
   e.preventDefault();
   const value = addForm.querySelector('input[type="text"]').value;

   //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    //append to dom
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

});

