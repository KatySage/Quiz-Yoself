'use strict';


let categoryType = 10;
let questionNumber = 10;
let questionDifficulty = 'medium';
//let questionsArr = [];

if (x === 0){
    document.addEventListener('DOMContentLoaded', () =>{
        console.log('this works')
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

const submitButton = document.querySelector('#submitForm')

submitButton.addEventListener('click', e =>{
<<<<<<< HEAD
    const submitButtonPressed = () => {
=======
    let questionsArr = [];
    console.log(questionsArr)
    //const submitButtonPressed = () => {
>>>>>>> 195d749634ed09b278dc03b194f169ea54674088
        // const url = `https://opentdb.com/api.php?amount=${questionNumber}&category=${categoryType}&difficulty=${questionDifficulty}`
        const url = `https://opentdb.com/api.php?amount=10&category=10&difficulty=medium`
        get(url).then(questions =>{
            console.log(questions.results[0].correct_answer)
            questionsArr = questions.results
            console.log(questionsArr)
<<<<<<< HEAD
=======
            x = 1;
            //HTMLBody.innerHTML = questionPageHTML
            //updateButtons()
            console.log('after')
            localStorage.setItem("questions", JSON.stringify(questionsArr))
            window.location.replace('gamescreen.html')
>>>>>>> 195d749634ed09b278dc03b194f169ea54674088
        })
    }
<<<<<<< HEAD
    submitButtonPressed()
});

=======
    //submitButtonPressed()
);
>>>>>>> 195d749634ed09b278dc03b194f169ea54674088
