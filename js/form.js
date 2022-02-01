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
        try {
            let personData = new AddressBook();
            personData.name = name.value;
            nameError.textContent = "";
        } catch (e) {
            nameError.textContent = e;
        }
    });

    phone.addEventListener('input', function () {
        try {
            let personData = new AddressBook();
            personData.phone = phone.value;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });

    address.addEventListener('input', function () {
        try {
            let personData = new AddressBook();
            personData.address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });
}

//Save
const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let addressBook = createAddressBook();
    addAndUpdateLocalStorage(addressBook); //Data store in local storage
    alert("You are added successfully " + addressBook._name);
    window.location.replace(site_properties.home);
}

const createAddressBook = () => {
    let addressBook = new AddressBook();
    addressBook.name = getInputValueId("#name");
    addressBook.phone = getInputValueId("#phone");
    addressBook.address = getInputValueId("#address");
    addressBook.city = getInputValueId("#city");
    addressBook.state = getInputValueId("#state");
    // addressBook.city = getSelectedValue('[name=city]').pop();
    // addressBook.state = getSelectedValue('[name=state]').pop();
    addressBook.zipcode = getInputValueId("#zipcode");
    return addressBook;
}

const getInputValueId = (id) => {
    return document.querySelector(id).value;
}

const setTextValue = (id, message) => {
    const textError = document.querySelector(id);
    textError.textContent = message;
}

const getSelectedValue = (propertyValue) => {
    let allItem = document.querySelectorAll(propertyValue);
    let setItem = [];
    allItem.forEach(item => {
        if (item.checked == true) {
            setItem.push(item.value);
        }
    })
    return setItem;
}

//Data store in local storage
const addAndUpdateLocalStorage = (persons) => {
    let personList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(personList != undefined) {
        personList.push(persons);
    } else {
        personList = [persons];
    }
    localStorage.setItem('AddressBookList', JSON.stringify(personList));
}

//Reset
const reset = () => {
    alert("Reset");
}

//Cancel
const cancel = () => {
    window.location.replace(site_properties.home);
}