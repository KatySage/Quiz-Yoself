'use strict';
let categoryType = 10;
let questionNumber = 10;
let questionDifficulty = 'medium';
let x = 0;
document.addEventListener('DOMContentLoaded', () =>{
    localStorage.removeItem('questions')
    localStorage.removeItem('correctCounter')
    //console.log("correct counter", correctCounter)
    const getQuestionNum = () => {
        const questionNum = document.getElementById('questionNum')
        for (let i=1; i <16; i++){
            const numOption = document.createElement('option')
            numOption.value = i.toString();
            numOption.text = i.toString();
            questionNum.appendChild(numOption);
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
                categoryOption.value = category.id;
                categoryOption.text = category.name;
            })
        })
    }
    getCategories()
})
const submitButton = document.querySelector('#submitForm')
submitButton.addEventListener('click', e =>{
    const categorySelect = document.getElementById('category')
    const questionDiff = document.getElementById('difficulty')
    const questionNum = document.getElementById('questionNum')
    let questionsArr = [];
    const url = `https://opentdb.com/api.php?amount=${questionNum.value}&category=${categorySelect.value}&difficulty=${questionDiff.value.toLowerCase()}&type=multiple`
    console.log(url)
    get(url).then(questions =>{
        questionsArr = questions.results
        console.log(questionsArr)
        x = 1;
        console.log('after')
        localStorage.setItem("questions", JSON.stringify(questionsArr))
        window.location.replace('gamescreen.html')
    })
});
