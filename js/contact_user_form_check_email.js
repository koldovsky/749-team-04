const form = document.querySelector('form');
const emailInput = document.getElementById('email');


function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  if (isValidEmail(emailValue)) {
    form.submit();
  } else {
    alert('Please enter a valid email address.');
  }
});