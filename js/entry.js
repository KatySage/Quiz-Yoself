'use strict';

const clickSound0= document.getElementById("click");
function playClick() {
    clickSound0.play();
}

const beginButton = document.getElementById('beginBTN')

beginButton.addEventListener('click', e=>{
    e.preventDefault()
    playClick()
    let nextPage = setTimeout(function(){window.location.replace('selection.html')},1000)
    
})