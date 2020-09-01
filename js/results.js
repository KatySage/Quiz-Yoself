'use strict';

const storedCorrect = JSON.parse(localStorage.getItem("correctCounter"))
const displayTable = document.getElementById('fullResults')
displayTable.style.display = "none"
console.log(storedCorrect)
const resultsButton = document.getElementById('moreResults')
let somethingElse = JSON.parse(localStorage.getItem('questions'))
const playAgain = document.getElementById('playAgain')

const resultDiv = document.getElementById('result')
const funnyStatement = document.getElementById('funny')
const y = (storedCorrect/somethingElse.length)

const clickSound= document.getElementById("click");
function playClick() {
    clickSound.play();
}
const appSound= document.getElementById("applause");
function appPlay() {
    appSound.play();
}
function appStop() {
    appSound.pause();
}
const booSound= document.getElementById("boos");
function booPlay() {
    booSound.play();
}
function booStop() {
    booSound.pause();
}
const myMusic= document.getElementById("music");
function play() {
    myMusic.play();
}

function pause() {
    myMusic.pause();
}


(function(){resultDiv.innerHTML = (`You got ${storedCorrect} out of ${somethingElse.length} correct!`)
    if ( y < .1) {
        funnyStatement.innerHTML = "You might get better results if you answered randomly."
        booPlay()
    } if (y < .3 && y >= .1) {
        funnyStatement.innerHTML = "Not too shabby! These are really difficult."
        booPlay()
    } if (y < .5 && y >= .3) {
        funnyStatement.innerHTML = "That's pretty good! You must have heard of this topic before." 
        booPlay()  
    } if (y == .5) {
        funnyStatement.innerHTML = "You got exactly half of these correct! You get half a pony! You pick which half." 
        appPlay()
    } if (y > .5 && y <=.75) {
        funnyStatement.innerHTML = "You're doing amazing! Your brain must be really wrinkly!"
        appPlay()
        } 
    if (y > .75 && y <= 1) {
        funnyStatement.innerHTML = "That's incredible! You're practically a walking encyclopedia!"
        appPlay()
    } if (y == 1) {
        funnyStatement.innerHTML = "You got EVERY question correct! That's incredible!"}
        appPlay()
})()

//fills in the table data from your results
document.addEventListener('DOMContentLoaded', ()=>{
    
    const answerArr = JSON.parse(localStorage.getItem("answerArr"))
    const somethingElse = JSON.parse(localStorage.getItem('questions'))
    const tableBody = document.getElementById('tableBody')
    console.log(answerArr)
    console.log(somethingElse)
    answerArr.forEach(function(ans, index) {
        const tableRow = document.createElement('tr')
        tableBody.appendChild(tableRow)
        if (somethingElse[index].correct_answer !== answerArr[index]) {
            tableRow.classList.toggle('wrong')
        } else {tableRow.classList.toggle('right')}
        let dataArray = [somethingElse[index].question,answerArr[index], somethingElse[index].correct_answer]
        dataArray.forEach(function(item,index){
            const tableData = document.createElement('td')
            tableRow.appendChild(tableData)
            tableData.innerHTML = dataArray[index]
            if (index === 0){
                tableData.classList.toggle('questionColumn')
            }   
            })
        });
    })
//toggles the table
const myFunction = () => {
        if (displayTable.style.display == "none") {
            displayTable.style.display = "inline";
        } else {
            displayTable.style.display = "none";
        }
    }

resultsButton.addEventListener('click', e=>{
    e.preventDefault()
    playClick()
    myFunction()
    const footerStyle = document.getElementById('footer')
    footerStyle.classList.toggle('extra_detail')
})
playAgain.addEventListener('click', e=>{
    e.preventDefault()
    playClick()
    let nextPage = setTimeout(function(){window.location.replace('selection.html')},1000)
})
