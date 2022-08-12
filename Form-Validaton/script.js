function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, 'hatalı bir mail adresi');
    }
}

function checkRequired(inputs) {
    console.log(inputs)
    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, `${input.name} doldurunuz.`);
        } else {
            success(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.name} en az ${min} karakter olmalıdır`);
    } else if (input.value.length > max) {
        error(input, `${input.name} en fazla ${max} karakter olmalıdır`);
    } else {
        success(input);
    }
}



// function checkMesaj(input) {
//     if (input.value === "") {
//         error(input, 'Görüşlerinizi bize mesaj ile iletiniz..');
//     }
//     else {
//         success(input);
//     }
// }

function checkPhone(input) {
    var exp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    if (!exp.test(input.value)) {
        error(input, 'numranızı xxx xxx-xxxx şekinde ve 0 kullanmadan giriniz');
        return;
    }

}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, sifre, phone,mesaj]);
    checkEmail(email);
    checkLength(mesaj,10,25);
    checkLength(username, 7, 15);
    checkLength(sifre, 7, 12);
    checkPhone(phone);
});

