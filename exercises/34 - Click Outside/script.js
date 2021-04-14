
const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick() {
  console.log('clicked');
};

cardButtons.forEach(butt => 
  butt.addEventListener('click',handleCardButtonClick ));