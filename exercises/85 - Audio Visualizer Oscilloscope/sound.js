const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;
let bufferLength;

async function getAudio() {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true });
    const audioCtx = new AudioContext();
    analyzer = audioCtx.createAnalyser();
    const source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyzer);
// How much data we wanna collect
analyzer.fftSize = 2 ** 10;
// Pull the data off the audio
bufferLength = analyzer.frequencyBinCount; 
const timeData = new Uint8Array(bufferLength);
const frequencyData = new Uint8Array(bufferLength);
drawTimeData(timeData);
};

function drawTimeData(timeData) {
    analyzer.getByteTimeDomainData(timeData);
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#ffc600';
    ctx.beginPath();
    const sliceWidth = WIDTH / bufferLength;
    let x = 0;
    timeData.forEach((data, i ) => {
    const v = data / 128;
    const y = (v * HEIGHT) / 2;
    //draw our lines
    if(i = 0) {
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
    }
    x += sliceWidth;
});
    ctx.stroke();

    requestAnimationFrame(() => drawTimeData(timeData));
};

getAudio();
