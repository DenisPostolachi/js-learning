const body = document.querySelector('body');

const showNotification = (top, right, message) => {
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