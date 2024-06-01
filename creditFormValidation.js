function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const ccnum = document.getElementById("ccnum").value.replace(/\s+/g, '');
    const cvc = document.getElementById("cvc").value;

    if (!validateName(name)) {
        alert("Full name must contain only letters. Please check and try again.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid email address. Please check and try again.");
        return false;
    }

    if (!luhnCheck(ccnum)) {
        alert("Invalid credit card number. Please check and try again.");
        return false;
    }

    if (!validateCVC(cvc)) {
        alert("Invalid CVC number. Please check and try again.");
        return false;
    }

    return true;
}

function validateName(name) {
    const re = /^[A-Za-z\s]+$/;
    return re.test(name);
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function luhnCheck(val) {
    let sum = 0;
    for (let i = 0; i < val.length; i++) {
        let intVal = parseInt(val.substr(i, 1));
        if (i % 2 === 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) === 0;
}

function validateCVC(cvc) {
    const re = /^[0-9]{3,4}$/;
    return re.test(cvc);
}
