const elem = document.querySelector('#elem');
let firstChild = elem.firstElementChild;
firstChild.style.color = 'red';

elem.previousElementSibling.textContent += ' !!!!!!';