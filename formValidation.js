function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!validateName(name)) {
        alert("Full name must contain only letters. Please check and try again.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid email address. Please check and try again.");
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
