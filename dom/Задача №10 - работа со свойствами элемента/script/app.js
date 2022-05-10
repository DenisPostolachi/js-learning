const field = document.querySelector('.field');
const ball = document.querySelector('.ball');
const btnCenter = document.querySelector('.btn-center');
const btnTopLeft = document.querySelector('.btn-top-left');
const btnTopRight = document.querySelector('.btn-top-right');

btnCenter.addEventListener('click', (e) => {
  field.style.display = 'flex';
  field.style.justifyContent = 'center';
  field.style.alignItems = 'center';
});

btnTopLeft.addEventListener('click', (e) => {
  field.style.display = 'block';
  ball.style.float = 'left';
});

btnTopRight.addEventListener('click', (e) => {
  field.style.display = 'block';
  ball.style.float = 'right';
});



