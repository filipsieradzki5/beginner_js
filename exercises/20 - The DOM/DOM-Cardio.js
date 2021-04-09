// Make a div
    const myDiv = document.createElement('div');

 // add a class of wrapper to it
    myDiv.classList = 'wrapper';
    //myDiV.className = 'wrapper'; ??

// put it into the body
    document.body.appendChild(myDiv);

// make an unordered list
    const list = document.createElement('ul');

// add three list items with the words "one, two, three" in them
    list.innerHTML = '<li> One </li> <li> Two </li> <li> Three </li>'

// put that list into the above wrapper
    myDiv.appendChild(list);

// create an image 
    const img = document.createElement('img');

// set the source to an image
    img.src = 'https://picsum.photos/500';

// set the width to 250
    img.width = 250;
// add a class of cute
     img.className = 'cute';

// add an alt of Cute Puppy
    img.alt = 'Cute Puppy';
// Append that image to the wrapper
    myDiv.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
    const myHTMl = '<div class="diver"><p></p><p></p></div>'

// put this div before the unordered list from above
    myDiv.insertAdjacentHTML("afterbegin",myHTMl);

// add a class to the second paragraph called warning
    const diver = document.querySelector('.diver');
    diver.children[1].classList.add('warninig');
// remove the first paragraph
    // diver.children[0].remove();
    diver.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
    let generatePlayerCard = function(name, age, height){
        return `<div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!
        <button class="delete" type="button"></button></p>
        </div>`
    };
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
    const cardsDiv = document.createElement('div');
    cardsDiv.classList.add('cards');
// make 4 player cards using generatePlayerCard
    const firstCard = generatePlayerCard('Filip', 25, 193);
    const secondCard = generatePlayerCard('Adam', 24, 190);
    const thirdCard = generatePlayerCard('Robert', 30, 190);
    const fourthCard = generatePlayerCard('Maciek', 55, 168);

    const summary = firstCard + secondCard + thirdCard + fourthCard;
    // console.log(summary);
// append those cards to the div
    cardsDiv.innerHTML = summary;
    // console.log(cardsDiv);
// put the div into the DOM just before the wrapper element
    myDiv.insertAdjacentElement("beforebegin",cardsDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
      
// select all the buttons!
    let button = document.querySelectorAll('.delete');  
// make out delete function
    function deleteCard(event) {
       event.currentTarget.closest('.playerCard').remove();
    }
// loop over them and attach a listener
button.forEach(button => button.addEventListener('click', deleteCard));