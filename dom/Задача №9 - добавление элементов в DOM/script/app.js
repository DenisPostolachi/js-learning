//todo document.body
// todo = (message, options: {top: true, left: true})
//todo сделать через position: fixed
console.log(11111);
const box = document.querySelector('.box');

const showNotifications = (message, options = {top: true, right: true}) => {
  const notification = document.createElement('div');
  const notificationText = document.createElement('p');
  notificationText.innerText = message;
  notification.style.position = "fixed";
  notification.style.top = options.top + "px";
  notification.style.right = options.right + "px";
  notification.classList.add('notification-content');

  notification.append(notificationText);
  box.append(notification);

  setTimeout(() => {
      box.remove(notification);
  }, 1500);

}


showNotifications('hello', {top: 100, right: 100});
