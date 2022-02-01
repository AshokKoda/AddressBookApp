let addressBookList;
window.addEventListener('DOMContentLoaded', () => {
    addressBookList = getDataFromStorage();
    // document.querySelector('.address-count').textContent = addressBookList.length;
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
            <img alt="edit" src="../assets/icons/create-black-18dp.svg" onClick=update(this)>
            <img alt="delete" src="../assets/icons/delete-black-18dp.svg" onClick=remove(this)>
            </td>
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

//Remove data
const remove = () => {
   alert("Delete");
}

//Update data
const update = () => {
    alert("Update");
 }
