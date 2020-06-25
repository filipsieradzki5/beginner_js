const shakebutton = document.querySelector('.shake');

const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');

const { width } = canvas;
const { height } = canvas;
// const {width, height} = canvas;

console.log(width, height);

// create random x and y starting point
const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// handler for arrow keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    console.log('handle key');
  }
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);

shakebutton.addEventListener('click', function() {
  console.log('work work work');
});
