'use strict';

let categoryType = 10;
let questionNumber = 10;
let questionDifficulty = 'medium';
let x = 0
//let questionsArr = [];

if (x === 0){
    document.addEventListener('DOMContentLoaded', () =>{
        console.log('thi works')
        //
        const getQuestionNum = () => {
            const questionNum = document.getElementById('questionNum')
            for (let i=1; i <16; i++){
                const numOption = document.createElement('option')
                numOption.value = i.toString();
                numOption.text = i.toString();
                questionNum.appendChild(numOption);
                questionNumber = i;
            }
        }
        getQuestionNum()
        const getQuestionDifficulty = () => {
            const questionDiff = document.getElementById('difficulty')
            const arrDiff = ["Easy", "Medium", "Hard"]
            arrDiff.map(function(diff){
                const diffOption = document.createElement('option');
                questionDiff.appendChild(diffOption);
                diffOption.value = diff;
                diffOption.text = diff;
                questionDifficulty = diff;
            })
        }
        getQuestionDifficulty()
        const getCategories = () => {
            const url = `https://opentdb.com/api_category.php`;
            const categorySelect = document.getElementById('category')
        
            get(url).then(function(categories){
                const arr = categories.trivia_categories
                arr.map(function(category){
                    const categoryOption = document.createElement('option')
                    categorySelect.appendChild(categoryOption)
                    categoryOption.value = category.name;
                    categoryOption.text = category.name;
                    categoryType = category.id;
                    
                })
            })
        }
        getCategories()
    })
}



const submitButton = document.querySelector('#submitForm')
const HTMLBody = document.querySelector('body')

submitButton.addEventListener('click', e =>{
    console.log(questionsArr)
    //const submitButtonPressed = () => {
        // const url = `https://opentdb.com/api.php?amount=${questionNumber}&category=${categoryType}&difficulty=${questionDifficulty}`
        e.preventDefault()
        const url = `https://opentdb.com/api.php?amount=10&category=10&difficulty=medium`
        get(url).then(questions =>{
            console.log(questions.results[0].correct_answer)
            questionsArr = questions.results
            console.log(questionsArr)
            x = 1;
            HTMLBody.innerHTML = questionPageHTML
            updateButtons()
            console.log('after')
            //window.location.replace('gamescreen.html')
        })
        //window.location.replace('gamescreen.html')
        //console.log(questionsArr)
    }
    //submitButtonPressed()
);
console.log(x)
const updateButtons = () => {
    console.log(questionsArr)
    const answerButtons = document.querySelectorAll('#btn')
    const answerButton2 = document.querySelector('#btn')

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    const setButtonVal = () => {
        let answer = getRandomInt(4)
        let j = 0;
        for (let i = 0; i < answerButtons.length; i++){
            if (i === answer){
                btn[i].innerHTML = questionsArr[0].correct_answer
            }
            else{
                btn[i].innerHTML = questionsArr[0].incorrect_answers[j]
                j++
            }
        }
    };

    setButtonVal();
    const buttonChange = () =>{
        answerButtons.forEach(btn=>{
            btn.addEventListener('click',(e)=>{
                e.preventDefault()
                console.log('clicked')
                //btn.innerHTML = 'boom'
                console.log(questionsArr[0].correct_answer)
                if (btn.innerHTML === questionsArr[0].correct_answer){
                    console.log('yep')
                    btn.classList.toggle('correct')
                }
                else {
                    console.log(btn.innerHTML)
                    btn.classList.toggle('incorrect')
                }
            })
        })
    }

    buttonChange()
}

