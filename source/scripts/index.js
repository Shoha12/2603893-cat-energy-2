/* в этот файл добавляет скрипты*/
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.main-nav'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('main-nav--active');
  });
});
