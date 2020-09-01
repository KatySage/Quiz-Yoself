'use strict';
const myMusic= document.getElementById("music");
function play() {
    myMusic.play();
}

function pause() {
    myMusic.pause();
}

myMusic.autoplay = true;
    if(myMusic.autoplay){
        myMusic.load()
        myMusic.play()
        console.log(myMusic.autoplay)
    }