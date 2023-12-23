const message = document.querySelector('.message');

const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');

const plsImage = document.querySelector('.plsImage');
const yesImage = document.querySelector('.yesImage');

yesBtn.addEventListener('click', () => {
  message.innerHTML = 'Yeeeyyyy!!';

  plsImage.classList.add('hide');
  yesImage.classList.remove('hide');
});

noBtn.addEventListener('mouseover', () => {
  const top = Math.floor(Math.random() * 1000);
  const left = Math.floor(Math.random() * 1000);

  noBtn.style.top = `${top}px`;
  noBtn.style.left = `${left}px`;
});

noBtn.addEventListener('click', () => {
  const top = Math.floor(Math.random() * 1000);
  const left = Math.floor(Math.random() * 1000);

  noBtn.style.top = `${top}px`;
  noBtn.style.left = `${left}px`;
});
