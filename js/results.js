'use strict';

const storedCorrect = JSON.parse(localStorage.getItem("correctCounter"))
const displayTable = document.getElementById('fullResults')
displayTable.style.display = "none"
console.log(storedCorrect)
const resultsButton = document.getElementById('moreResults')
// @ts-ignore
let storedQuestions = JSON.parse(localStorage.getItem('questions'))

const resultDiv = document.getElementById('result')
const funnyStatement = document.getElementById('funny')
const y = (storedCorrect/storedQuestions.length)
resultDiv.innerHTML = (`You got ${storedCorrect} out of ${storedQuestions.length} correct!`)
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


//fills in the table data from your results
document.addEventListener('DOMContentLoaded', ()=>{
    const answerArr = JSON.parse(localStorage.getItem("answerArr"))
    const storedQuestions = JSON.parse(localStorage.getItem('questions'))
    console.log(answerArr)
    console.log(storedQuestions)
    answerArr.forEach(function(ans, index) {
        const tableRow = document.createElement('tr')
        displayTable.appendChild(tableRow)
        if (storedQuestions[index].correct_answer !== answerArr[index]) {
            tableRow.classList.toggle('wrong')
        }
        let dataArray = [storedQuestions[index].question,answerArr[index], storedQuestions[index].correct_answer]
        dataArray.forEach(function(item,index){
            const tableData = document.createElement('td')
            tableRow.appendChild(tableData)
            tableData.innerHTML = dataArray[index]   
            })
        });
    })
//toggles the table
const myFunction = () => {
        if (displayTable.style.display == "none") {
            displayTable.style.display = "block";
        } else {
            displayTable.style.display = "none";
        }
    }

resultsButton.addEventListener('click', e=>{
    e.preventDefault()
    myFunction()
})

