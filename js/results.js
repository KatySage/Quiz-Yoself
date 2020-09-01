'use strict';

const storedCorrect = JSON.parse(localStorage.getItem("correctCounter"))
const displayTable = document.getElementById('fullResults')
displayTable.style.display = "none"
console.log(storedCorrect)
const resultsButton = document.getElementById('moreResults')
let somethingElse = JSON.parse(localStorage.getItem('questions'))

const resultDiv = document.getElementById('result')
const funnyStatement = document.getElementById('funny')
const y = (storedCorrect/somethingElse.length)
<<<<<<< HEAD
resultDiv.innerHTML = (`You got ${storedCorrect} out of ${somethingElse.length} correct!`)
if ( y < .1) {
    funnyStatement.innerHTML = "You might get better results if you answered randomly."
} if (y < .3 && y >= .1) {
    funnyStatement.innerHTML = "Not too shabby! These are really difficult."
} if (y < .5 && y >= .3) {
    funnyStatement.innerHTML = "That's pretty good! You must have heard of this topic before."   
} if (y == .5) {
    funnyStatement.innerHTML = "You got exactly half of these correct! You get half a pony! You pick which half." 
} if (y > .5 && y <=.75) {
        funnyStatement.innerHTML = "You're doing an amazing job! Your brain must be really wrinkly!"
    } if (y > .75 && y <= 1) {
    funnyStatement.innerHTML = "That's incredible! You're practically a walking encyclopedia!"
} if (y == 1) {
    funnyStatement.innerHTML = "You got EVERY question correct! That's incredible!"}
=======
>>>>>>> d0a0539021a7a56d313ef459aa72db948f642d28

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


(function(){resultDiv.innerHTML = (`You got ${storedCorrect} out of ${somethingElse.length} correct!`)
    if ( y < .1) {
        funnyStatement.innerHTML = "You might get better results if you answered randomly."
    } if (y < .3 && y >= .1) {
        funnyStatement.innerHTML = "Not too shabby! These are really difficult."
    } if (y < .5 && y >= .3) {
        funnyStatement.innerHTML = "That's pretty good! You must have heard of this topic before."   
    } if (y == .5) {
        funnyStatement.innerHTML = "You got exactly half of these correct! You get half a pony! You pick which half." 
    } if (y > .5 && y <=.75) {
            funnyStatement.innerHTML = "You're doing amazing! Your brain must be really wrinkly!"
        } if (y > .75 && y <= 1) {
        funnyStatement.innerHTML = "That's incredible! You're practically a walking encyclopedia!"
    } if (y == 1) {
        funnyStatement.innerHTML = "You got EVERY question correct! That's incredible!"}
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
    myFunction()
    const footerStyle = document.getElementById('footer')
    footerStyle.classList.toggle('extra_detail')
})

