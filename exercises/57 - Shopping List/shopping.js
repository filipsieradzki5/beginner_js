const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');
const submitButton = document.querySelector('.button');

//Array to storage data
const items= [];

// handle submit button
function handleSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.item.value;
    const item = {
        name,
        id: Date.now(),
        complete: false,
    }
    // push the item into or items array
    items.push(item);
    //cler the input
    e.target.reset();
    displayItems();
};

function displayItems() {
    const html = items.map(
        item => 
        `<li class="shopping-item">
        <input type="checkbox">
        <span class="itemName">${item.name}</span>
        <button aria-label="remove ${item.name}">&times;</button>
        </li>`)
    .join('');
    list.innerHTML = html;
}

shoppingForm.addEventListener('submit',handleSubmit);
