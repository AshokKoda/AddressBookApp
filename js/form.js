let isUpdate = false;
addressBookObject = {};
window.addEventListener('DOMContentLoaded', (event) => {
    validateInputs();
    editForm();
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
    //alert(JSON.stringify(addressBook));
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
    addressBook.zipcode = getInputValueId("#zipcode");
    //addressBook.id = new Date().getTime() + 1;
    addressBook.id = addressBookObject._id;
    return addressBook;
}

const getInputValueId = (id) => {
    return document.querySelector(id).value;
}

//Create a new person id
const createNewPersonId = () => {
    let personId = localStorage.getItem('personId');
    personId = !personId ? 1 : (parseInt(personId) + 1).toString();
    localStorage.setItem('personId', personId);
    return personId;
}

//Data store in local storage
const addAndUpdateLocalStorage = (data) => {
    let personList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (personList) {
        let existingPersonData = personList.find(personData => personData._id == data.id);
        if (!existingPersonData) {
            data.id = createNewPersonId();
            personList.push(data);
        } else {
            const index = personList.map(person => person._id).indexOf(data.id); //Get index of that array using map andindexOf
            personList.splice(index, 1, data); //Remove person from the list
        }
    } else {
        data.id = createNewPersonId();
        personList = [data];
    }
    localStorage.setItem('AddressBookList', JSON.stringify(personList));
}

//Data shows in form form local storage for updating data
const editForm = () => {
    let jsonData = localStorage.getItem('edit-person');
    isUpdate = jsonData ? true : false;
    if (!isUpdate)
        return;
    addressBookObject = JSON.parse(jsonData);
    setForm();
}

const setForm = () => {
    setValue('#name', addressBookObject._name);
    setValue('#phone', addressBookObject._phone);
    setValue('#address', addressBookObject._address);
    setValue('#city', addressBookObject._city);
    setValue('#state', addressBookObject._state);
    setValue('#zipcode', addressBookObject._zipcode);
}

const setValue = (id, value) => {
    let element = document.querySelector(id);
    element.value = value;
}

//Reset
const reset = () => {
    alert("Reset");
}

//Cancel
const cancel = () => {
    window.location.replace(site_properties.home);
}