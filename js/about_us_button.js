const button = document.querySelector('.about_us__button');
const originalColor = button.style.backgroundColor;

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#f1c324';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = originalColor;
});