const element = document.querySelector('#elem');
const firstChild = element.firstElementChild;
firstChild.style.color = 'red';

element.previousElementSibling.innerText += ' !!!!!!';
