const box = document.querySelector('.box');

const showNotifications = (message, options = {top: true, right: true}) => {
  const notification = document.createElement('div');
  const notificationText = document.createElement('p');
  notificationText.innerText = message;
  notification.style.position = "fixed";
  notification.style.top = `${options.top}px`;
  notification.style.right = `${options.right}px`;
  notification.classList.add('notification-content');

  notification.append(notificationText);
  box.append(notification);

  setTimeout(() => {
      box.removeChild(notification);
  }, 2500);

}


showNotifications('hello', {top: 100, right: 100});
