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
    for (const personData of addressBookList){
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
