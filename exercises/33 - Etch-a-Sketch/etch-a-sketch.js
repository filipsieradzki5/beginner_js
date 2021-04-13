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

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// start drawing
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
  if (e.key === 'ArrowRight') {
    ctx.lineTo(x+10,y);
    x=x+10;
  } else if (e.key === 'ArrowLeft') {
    ctx.lineTo(x-10,y);
    x=x-10;
  } else if (e.key === 'ArrowUp') {
    ctx.lineTo(x,y-10);
    y=y-10;
  } else if (e.key === 'ArrowDown') {
    ctx.lineTo(x,y+10);
    y=y+10;
  } else {
    window.alert("please use arrow keys");
  };
  ctx.stroke();
}

window.addEventListener('keydown', drawingCanvas);

// clearing the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, width, height);
  canvas.classList.add('animation');
  canvas.addEventListener('animationend', () => {
    canvas.classList.remove('animation');
  })
  };
shakebutton.addEventListener('click', clearCanvas);
