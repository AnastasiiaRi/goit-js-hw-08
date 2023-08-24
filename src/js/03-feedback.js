import throttle from 'lodash.throttle'; 
const form = document.querySelector(".login-form");
form.addEventListener('input', throttle(onFormSubmit, 500));
form.addEventListener('submit', onFormSubmit);
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