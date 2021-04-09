
console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// oh shoot! we need to add somethint to the top. like a heading!
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('beforebegin', heading);

// <ul>
// <li>One</li>
// <li>two</li>
// <li>three</li>
// <li>four</li>
// <li>five</li>
// </ul>

const myUl = document.createElement('ul');
const firstLi = document.createElement('li');
firstLi.textContent= 'One';
const secondLi =document.createElement('li');
secondLi.textContent = 'Two';
const thirdLi =document.createElement('li');
thirdLi.textContent = 'Three';
const fourthLi =document.createElement('li');
fourthLi.textContent = 'Four';
const fifthLi =document.createElement('li');
fifthLi.textContent = 'Five';


myUl.insertAdjacentElement('afterbegin',thirdLi);
myUl.insertAdjacentElement('afterbegin',secondLi);
myUl.insertAdjacentElement('afterbegin',firstLi);
myUl.insertAdjacentElement('beforeend',fourthLi);
myUl.insertAdjacentElement('beforeend',fifthLi);

document.body.insertAdjacentElement('afterbegin',myUl);

console.log(myUl);

const item = document.querySelector('.item');


item.innerHTML = `<div><h1> How are Ya!</h1></div>`;
