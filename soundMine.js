function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
let tapSound4 = new Sound("sound/smallhit4.mp3")
let tapSound2 = new Sound("sound/smallhit2.mp3");
let tapSound3 = new Sound("sound/smallhit3.mp3");
let tapSound = [tapSound2,tapSound3,tapSound4];
let completeSound1 = new Sound("sound/complete1.wav");
let completeSound2 = new Sound("sound/complete2.wav");
let completeSound3 = new Sound("sound/complete3.wav");
let completeSound =[completeSound3,completeSound2,completeSound1];
let failSound = new Sound("sound/losing.wav");
let progressing = new Sound("sound/progressing.wav")
function playCompleteSound(){
    let a=Math.floor(Math.random()*3);
    completeSound[a].play();
}
let countTap =0;//thay đổi tapSound effect
function playTapSound(){
    if(countTap<3){
        tapSound[countTap].play();
        countTap++;
    }
    else {
        countTap=0;
        tapSound[countTap].play();
        countTap++;
    }
}
function playProgressing(){
    progressing.play();
}
function stopProgressing(){
    progressing.stop();
}
function playFailSound(){
    failSound.play();
}

