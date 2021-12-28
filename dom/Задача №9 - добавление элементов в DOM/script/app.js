
//todo document.body
const body = document.querySelector('body');

// todo = (message, options: {top: true, left: true})
const showNotification = (top, right, message) => {
  //todo сделать через position: fixed
  setTimeout(() => {
    const element = document.createElement('div');
    element.textContent = message;
    element.classList.add('notification');
    element.style.paddingTop = top;
    element.style.paddingRight = right;

    body.appendChild(element);

  }, 1500);
};

showNotification('100px', '100px', 'test');
