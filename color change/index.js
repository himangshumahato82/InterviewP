const line = document.querySelectorAll('li');
line.forEach((li) => {
  li.addEventListener('mouseenter', () => {
    li.classList.add('color');
  });

  li.addEventListener('mouseleave', () => {
    li.classList.remove('color');
  });
});