'use strict';
let categoryType = 10;
let questionNumber = 10;
let questionDifficulty = 'medium';
const token = JSON.parse(localStorage.getItem('token'))

document.addEventListener('DOMContentLoaded', () =>{
    localStorage.removeItem('questions')
    localStorage.removeItem('correctCounter')
    const questionNum = document.getElementById('questionNum')
    //console.log("correct counter", correctCounter)
    
    
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
    const getFifteen = () => {
        for (let i=1; i < 16; i++){
            const numOption = document.createElement('option')
            numOption.value = i.toString();
            numOption.text = i.toString();
            questionNum.appendChild(numOption);
        }
    }
    getFifteen()
})
const form = document.getElementById('selection-menu')
form.addEventListener('change', event => {
    event.preventDefault()
    if (event.target.id !== 'questionNum') {
    const getQuestionNum = () => {
        const categorySelect = document.getElementById('category')
        const questionDiff = document.getElementById('difficulty')
        const url = `https://opentdb.com/api_count.php?category=${categorySelect.value}`
        const questionNum = document.getElementById('questionNum')
        console.log(url)
        questionNum.innerHTML=""

        let maxTotal = 0;
        get(url).then(function(categoryQCount){
            // const arr = categoryQCount.category_question_count
            if (questionDiff.value === ""){
                maxTotal = categoryQCount.category_question_count.total_question_count
                if(maxTotal>=16){maxTotal = 16}
                for (let i=1; i <= maxTotal; i++){
                    const numOption = document.createElement('option')
                    numOption.value = i.toString();
                    numOption.text = i.toString();
                    questionNum.appendChild(numOption);
                }
            } else {      
                maxTotal = categoryQCount.category_question_count[`total_${questionDiff.value.toLowerCase()}_question_count`]
                if(maxTotal>=16){maxTotal = 16}
                for (let i=1; i <= maxTotal; i++){
                    const numOption = document.createElement('option')
                    numOption.value = i.toString();
                    numOption.text = i.toString();
                    questionNum.appendChild(numOption);
                }
            }
        console.log(categoryQCount.category_question_count[`total_${questionDiff.value.toLowerCase()}_question_count`])
        console.log(maxTotal)
        })
        console.log(maxTotal)

    }
    getQuestionNum()}
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
        console.log('after')
        localStorage.setItem("questions", JSON.stringify(questionsArr))
        window.location.replace('gamescreen.html')
    })
});
