import throttle from 'lodash.throttle'; 
const form = document.querySelector(".login-form");

let dataForm = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function reloadPage() {
    if (dataform)  {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
    if (email.value === '' || message.value === '') {
        return alert('Все поля должны быть заполнены');
    }
    localStorage.removeItem('feedback-form-state');
    e.currentTarget.reset();
    dataForm = {};
}
form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);