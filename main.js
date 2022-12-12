song1 = '';
song2 = '';

function setup(){
    canvas = createCanvas(500, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function draw(){
    img(video, 0, 0, 500, 300)
}

function play(){
    var aa = floor(random() * 2);

    if(aa = 1) {
        song1.play();
    }else {
        song2.play();
    }
}