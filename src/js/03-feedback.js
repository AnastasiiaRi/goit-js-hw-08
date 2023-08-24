import throttle from 'lodash.throttle'; 
const form = document.querySelector(".login-form");

function onFormInput(event) {
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;
    const formData = {
        email,
        message,
    };
    localStorage.setItem('feedback-form-state', formData);
}

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;
    if (email === '' || message === '') {
        return alert('Все поля должны быть заполнены');
    }
    const formData = {
        email,
        message,
    };
    console.log(formData);
    event.currentTarget.reset();
}

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);