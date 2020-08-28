'use strict';


let categoryType = 10;
let questionNumber = 10;
let questionDifficulty = 'medium';
//let questionsArr = [];

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

const submitButton = document.querySelector('#submitForm')

submitButton.addEventListener('click', e =>{
    const submitButtonPressed = () => {
        // const url = `https://opentdb.com/api.php?amount=${questionNumber}&category=${categoryType}&difficulty=${questionDifficulty}`
        const url = `https://opentdb.com/api.php?amount=10&category=10&difficulty=medium`
        get(url).then(questions =>{
            console.log(questions.results[0].correct_answer)
            questionsArr = questions.results
            console.log(questionsArr)
        })
    }
    submitButtonPressed()
});

