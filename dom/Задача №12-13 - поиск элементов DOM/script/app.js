const element = document.querySelector('#elem');
//todo use const
let firstChild = element.firstElementChild;
firstChild.style.color = 'red';

element.previousElementSibling.innerText += ' !!!!!!';
