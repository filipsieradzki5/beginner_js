const faceDetector = new window.FaceDetector();
const video = document.querySelector('video.webcam');
const canvas = document.querySelector('canvas.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('canvas.face');
const faceCtx = faceCanvas.getContext('2d');

const options = {
  SIZE: 10,
  SCALE: 1.1,
};

 
const optionsImputs = document.querySelectorAll(
  '.controls input[type="range"]'
  );

  function handleOption(e) {
    let {value, name} = e.currentTarget;
    options[name] = parseFloat(value);
  }

optionsImputs.forEach(input => input.addEventListener('input', handleOption));

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {width: 854, height: 480},
  });
  video.srcObject = stream;
  await video.play();
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
};

async function detect() {
  const faces = await faceDetector.detect(video);
  ctx.clearRect(0, 0, canvas.width, canvas.height);  
  // ask the browser when the next animation frame is and run detect
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect);
  
};

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height );  
}


function censor({boundingBox: face}) {
  faceCtx.imageSmoothingEnabled = false;
  // draw the small face
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  faceCtx.drawImage(
    video,
    face.x,
    face.y,
    face.width,
    face.height,
    face.x,
    face.y,
    options.SIZE,
    options.SIZE,
    );
  // take it back and rescale
  const width = face.width * options.SCALE;
  const height = face.height *options.SCALE;
  faceCtx.drawImage(
    faceCanvas,
    face.x,
    face.y,
    options.SIZE,
    options. SIZE,
    face.x-(width - face.width) /2,
    face.y-(height - face.height) /2,
    width,
    height
  )
}

populateVideo().then(detect);

