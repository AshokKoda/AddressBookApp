let addressBookList;
window.addEventListener('DOMContentLoaded', () => {
    addressBookList = getDataFromStorage();
    localStorage.removeItem("edit-person");
    createInnerHTML();
})

const getDataFromStorage = () => {
    return localStorage.getItem('AddressBookList')
        ? JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHTML = () => {
    const headerHtml = `
    <tr>
        <th>Fullname</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip Code</th>
        <th>Phone Number</th>
        <th>Actions</th>
    </tr>`;

    let innerHtml = `${headerHtml}`;
    for (const personData of addressBookList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>${personData._name}</td>
            <td>${personData._address}</td>
            <td>${personData._city}</td>
            <td>${personData._state}</td>
            <td>${personData._zipcode}</td>
            <td>${personData._phone}</td>
            <td>
            <img id="${personData._id}" alt="edit" src="../assets/icons/create-black-18dp.svg" onClick=update(this)>
            <img id="${personData._id}" alt="delete" src="../assets/icons/delete-black-18dp.svg" onClick=remove(this)>
            </td>
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

//Remove data
const remove = (data) => {
    let deletePerson = addressBookList.find(personData => personData._id == data.id);
    if (!deletePerson)
        return;
    const index = addressBookList.map(personData => personData._id).indexOf(deletePerson._id);
    addressBookList.splice(index, 1);
    localStorage.setItem('AddressBookList', JSON.stringify(addressBookList));
    alert("Person deleted successfully..!");
    createInnerHTML();
    localStorage.removeItem("edit-person");
}

//Update data
const update = (data) => {
    let updatePerson = addressBookList.find(personData => personData._id == data.id);
    if (!updatePerson)
        return;
    localStorage.setItem('edit-person', JSON.stringify(updatePerson));
    window.location.replace(site_properties.form);
}
