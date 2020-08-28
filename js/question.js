'use strict';
//Katy this will be something you can use I will have to use independent IDs for each button to get them to change with event listeners...
const storedQuestions = JSON.parse(localStorage.getItem("questions"))
console.log(storedQuestions)
const questionAsked = document.getElementById('question')
let questionIterator = 0;
const submitQsButton = document.getElementById('btnSubmit')
const nextQsButton = document.getElementById('btnNext')

const updateButtons = () => {
    console.log(questionIterator)
    const answerButtons = document.querySelectorAll('#btn')
    //const answerButton2 = document.querySelector('#btn')
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

    updateButtons();
    questionIterator++;
    submitQsButton.style.display = "block"
    nextQsButton.style.display = "none"


})

// answerButtons.forEach(btn=>{
//     btn.addEventListener('click',(e)=>{
//         e.preventDefault()
//         console.log('clicked')
//         //btn.innerHTML = 'boom'
//         console.log(storedQuestions[questionIterator].correct_answer)
//         if (btn.innerHTML === storedQuestions[questionIterator].correct_answer){
//             console.log('yep')
//             btn.classList.toggle('correct')
//         }
//         else {
//             console.log(btn.innerHTML)
//             btn.classList.toggle('incorrect')
//         }
//     })
// })
submitQsButton.addEventListener('click', (e)=>{
    const buttonChange = () =>{
        const answerButtons = document.querySelectorAll('#btn')
        answerButtons.forEach(btn=>{
                console.log('clicked')
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

        })
    }
    buttonChange()
    nextQsButton.style.display = "block"
    submitQsButton.style.display = "none"
})