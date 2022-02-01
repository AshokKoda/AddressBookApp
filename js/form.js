window.addEventListener('DOMContentLoaded', (event) => {
    validateInputs();
})

function validateInputs() {
    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone');
    const address = document.querySelector('#address');
    const nameError = document.querySelector('.error-name');
    const phoneError = document.querySelector('.error-phone');
    const addressError = document.querySelector('.error-address');

    name.addEventListener('input', function () {
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name.value)) {
            nameError.textContent = "";
        } else {
            nameError.textContent = "1)First letter must be in uppercase."
            + "\n2)Minimum 3 characters";
        }
    });

    phone.addEventListener('input', function () {
        const phoneRegex = RegExp('^[+][1-9]{2}[-][0-9]{10}$');
        if (phoneRegex.test(phone.value)) {
            phoneError.textContent = "";
        } else {
            phoneError.textContent = "1)Phone number should be starts with country code"
            + "\n2)Phone number must be have 10 digits (Ex:+91-1234567890)";
        }
    });

    address.addEventListener('input', function () {
        const addressRegex = RegExp('^([A-Za-z0-9/.,-]{3,}.)+$');
        if (addressRegex.test(address.value)) {
            addressError.textContent = "";
        } else {
            addressError.textContent = "Invalid address.";
        }
    });
}

//Save
const save = () => {
    alert("Save");
}

//Reset
const reset = () => {
    alert("Reset");
}