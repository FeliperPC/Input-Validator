import './style.css';
import validator from 'validator';

const input = document.querySelector('input');
const btn = document.querySelector('button');
const selection = document.querySelector('select');
const result = document.querySelector('p');

btn.addEventListener('click', () => {
  const info = {
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    phoneNumber: validator.isMobilePhone(input.value),
    email: validator.isEmail(input.value),
    url: validator.isURL(input.value),
  };

  result.innerHTML = `the validation returned ${info[selection.value]}`;
});
