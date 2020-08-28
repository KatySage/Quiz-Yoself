'use strict';

const storedQuestions = JSON.parse(localStorage.getItem("questions"))
console.log(storedQuestions)
const questionAsked = document.getElementById('question')
let questionIterator = 0;
const submitQsButton = document.getElementById('btnSubmit')
const nextQsButton = document.getElementById('btnNext')
const answerButtons = document.querySelectorAll('#btn')
let answerSelected = false;



const updateButtons = () => {
    const answerButtons = document.querySelectorAll('#btn')
    questionAsked.innerHTML= (storedQuestions[questionIterator].question)

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const setButtonVal = () => {
        let answer = getRandomInt(4)
        let j = 0;
        for (let i = 0; i < answerButtons.length; i++){
            if (i === answer){
                answerButtons[i].innerHTML = storedQuestions[questionIterator].correct_answer
            }
            else{
                answerButtons[i].innerHTML = storedQuestions[questionIterator].incorrect_answers[j]
                j++
            }
        }
    }
    setButtonVal()
};


document.addEventListener('DOMContentLoaded', ()=>{
    updateButtons();
    questionIterator++;
    nextQsButton.style.display = "none"
})

nextQsButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if (questionIterator === storedQuestions.length){
        window.location.replace('results.html')
    }
    buttonNeutral();
    updateButtons();
    questionIterator++;
    submitQsButton.style.display = "block"
    nextQsButton.style.display = "none"
    answerSelected = false
});


(function (){
    answerButtons.forEach(btn=>{
        btn.addEventListener('click', e=>{
            const removeAll = () =>{
                answerButtons.forEach(button =>{
                    button.classList.remove('selected')
                })
            }
            removeAll()
            btn.classList.toggle('selected')
            answerSelected = true
        })
    })
})();
let correctCounter = 0
submitQsButton.addEventListener('click', (e)=>{
    const resultDisplay = document.getElementById('result')
    let answer = ""
    if (!answerSelected){
        resultDisplay.innerHTML=('Please select an answer')
    }
    else{
        const buttonChange = () =>{
            answerButtons.forEach(btn=>{
                if (btn.classList.contains("selected")){
                    answer = btn.innerHTML
                    console.log('clicked')
                }
                    //btn.innerHTML = 'boom'
                console.log(storedQuestions[questionIterator-1].correct_answer)
                if (btn.innerHTML === storedQuestions[questionIterator-1].correct_answer){
                    console.log('yep')
                    btn.classList.toggle('correct')
                }
                else {
                    console.log(btn.innerHTML)
                    btn.classList.toggle('incorrect')
                }
                console.log("correct counter", correctCounter)
                if (answer === storedQuestions[questionIterator-1].correct_answer){
                    resultDisplay.innerHTML = "CORRECT!!!"
                    correctCounter += 1
                    }
                else {
                    resultDisplay.innerHTML = "INCORRECT!!!"
                }
            
            })
        }
    
        buttonChange()
    
    if (questionIterator === storedQuestions.length){
        nextQsButton.innerHTML = "Results"  
    } 
    nextQsButton.style.display = "block"
    submitQsButton.style.display = "none"}
})

const buttonNeutral = () =>{
    const answerButtons = document.querySelectorAll('#btn')
    const resultDisplay = document.getElementById('result')
    answerButtons.forEach(btn=>{
        btn.classList.remove('correct')
        btn.classList.remove('incorrect')
        btn.classList.remove('selected')
    })
    resultDisplay.innerHTML=""
}
localStorage.setItem("correctCounter", JSON.stringify(correctCounter))