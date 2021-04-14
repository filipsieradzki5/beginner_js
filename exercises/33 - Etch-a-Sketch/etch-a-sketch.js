const shakebutton = document.querySelector('.shake');

const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');
console.log(ctx);

const width  = canvas.width;
const height  = canvas.height;
// const {width, height} = canvas;

console.log(width, height);

// create random x and y starting point
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let moveAmount = 10;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = moveAmount;


//changing colors
let hue = 0;


// start drawing
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); 
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


// handler for arrow keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    console.log(e.key);
  }
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);

function drawingCanvas(e) {
  ctx.beginPath(); 
  ctx.moveTo(x,y);
  if (e.key === 'ArrowRight') {
    x+=moveAmount; 
  } else if (e.key === 'ArrowLeft') {
    x-=moveAmount;
  } else if (e.key === 'ArrowUp') {
    y-=moveAmount; 
  } else if (e.key === 'ArrowDown') {
    y+=moveAmount; 
  } else {
    window.alert("please use arrow keys");
  };
  hue+=moveAmount;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineTo(x,y);
  ctx.stroke();
}

window.addEventListener('keydown', drawingCanvas);

// clearing the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, width, height);
  canvas.classList.add('animation');
  canvas.addEventListener('animationend', () => {
    canvas.classList.remove('animation');
  }, {once: true}); 
  };
shakebutton.addEventListener('click', clearCanvas);
