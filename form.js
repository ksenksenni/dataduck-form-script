let areas = document.querySelectorAll('.form__item-input');
let areaPassword = document.querySelector('.form__item-password input');
let messagePassword = document.querySelector('.form__error-attention-password');
let popUpPassword = document.querySelector('.form__error-password');
let form = document.querySelector('.form');

areaPassword.onchange = function(e) {
    console.log(e.target.value);
    if (e.target.value.length < 4) {
        messagePassword.classList.remove('off');
        popUpPassword.classList.remove('off');
        areaPassword.classList.add('error');
    } else {
        messagePassword.classList.add('off');
        popUpPassword.classList.add('off');
        areaPassword.classList.remove('error');

    }
};

form.onsubmit = function(evt) {
    evt.preventDefault()

    const body = {
        email: form.elements.email.value,
        password: form.elements.password.value,
        radio: form.elements.radio.value,
    }
    console.log(body)
    fetch('#', {
        method: 'POST',
        headers: {
            "Origin": '#',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body
    })

    for (let area of areas) {
        area.value = '';
    }
}