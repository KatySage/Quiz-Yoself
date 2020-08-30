'use strict';

const storedCorrect = JSON.parse(localStorage.getItem("correctCounter"))
const displayTable = document.getElementById('fullResults')
displayTable.display ="none"
console.log(storedCorrect)
const resultsButton = document.getElementById('moreResults')

const resultDiv = document.getElementById('result')

resultDiv.innerHTML = storedCorrect

const buildFullResults = () => {
    const answerArr = JSON.parse(localStorage.getItem("answerArr"))
    const storedQuestions = JSON.parse(localStorage.getItem('questions'))
    displayTable.display = "block"
    console.log(answerArr)
    for (let j = 0; j < answerArr.length; j ++){
        const tableRow = document.createElement('tr')
        displayTable.appendChild(tableRow)
        let dataArray = [storedQuestions[j].question,answerArr[j+1], storedQuestions[j].correct_answer]
        for (let i = 0; i < 3; i++){
            const tableData = document.createElement('td')
            tableRow.appendChild(tableData)
            tableData.innerHTML = dataArray[i]
        }
    }
}

resultsButton.addEventListener('click', e=>{
    e.preventDefault()
    buildFullResults()
})

