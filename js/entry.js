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

const clickSound= document.getElementById("click");
function playClick() {
    clickSound.play();
}

const beginButton = document.getElementById('beginBTN')

beginButton.addEventListener('click', e=>{
    e.preventDefault()
    playClick()
    let nextPage = setTimeout(function(){window.location.replace('selection.html')},1000)
    
})