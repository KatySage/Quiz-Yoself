'use strict';
let categoryType = 10;
let questionNumber = 10;
let questionDifficulty = 'medium';
const token = JSON.parse(localStorage.getItem('token'))
const myMusic= document.getElementById("music");


function toggle() {
    const image = document.getElementById("toggle");
    if (image.className === "play") {
        image.className = "pause"
        image.src = "images/play.png";
        myMusic.pause();
    } else {
        image.className = "play"
        image.src = "images/pause.png";
        myMusic.play();
    }
}

const clickSound = document.getElementById("click");
function playClick() {
    clickSound.play();
}

document.addEventListener('DOMContentLoaded', () =>{
    
    localStorage.removeItem('questions')
    localStorage.removeItem('correctCounter')
    const questionNum = document.getElementById('questionNum')
    myMusic.autoplay = true;
    if(myMusic.autoplay){
        myMusic.load()
        myMusic.play()
        console.log(myMusic.autoplay)
    }
        
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
const numForm = document.getElementById('other-form')
numForm.addEventListener('change',event=>{
    event.preventDefault()
    console.log(event.target.id)
    console.log(document.querySelectorAll('.required').length > 0)
    if (event.target.id === 'questionNum' && document.querySelectorAll('.required').length > 0){
        console.log('happened')
        document.getElementById('required').remove()
        
    }
})
form.addEventListener('change', event => {
    console.log(event.target.id)
    event.preventDefault()
    let url = '';
    if (event.target.id !== 'questionNum') {
    const getQuestionNum = () => {
        const categorySelect = document.getElementById('category')
        const questionDiff = document.getElementById('difficulty')
        const questionNum = document.getElementById('questionNum')
        questionNum.innerHTML="Select number"
        if (categorySelect.value===""){
            for (let i=1; i <= 16; i++){
                const numOption = document.createElement('option')
                numOption.value = i.toString();
                numOption.text = i.toString();
                questionNum.appendChild(numOption);
            }
            return 0;
        }
        else{
            url = `https://opentdb.com/api_count.php?category=${categorySelect.value}`
        }
        console.log('category URL', url)
        console.log(url)
        

        let maxTotal = 0;
        get(url).then(function(categoryQCount){
            // const arr = categoryQCount.category_question_count
            if (questionDiff.value === ""){
                maxTotal = categoryQCount.category_question_count.total_question_count
                if(maxTotal>=16){maxTotal = 15}
                for (let i=1; i <= maxTotal; i++){
                    const numOption = document.createElement('option')
                    numOption.value = i.toString();
                    numOption.text = i.toString();
                    questionNum.appendChild(numOption);
                }
            } 
            else {      
                maxTotal = categoryQCount.category_question_count[`total_${questionDiff.value.toLowerCase()}_question_count`]
                if(maxTotal>=16){maxTotal = 15}
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
    console.log(questionNum.value)
    if (questionNum.value === ""){
        if(document.querySelectorAll('.required').length > 0)
        {
            document.getElementById('required').remove()
        }
        
        const errorMessage = document.createElement('p')
        const numQuestions = document.getElementById('numQuestions')
        numQuestions.appendChild(errorMessage)
        errorMessage.innerHTML = '*required'
        errorMessage.classList.toggle('required')
        errorMessage.id = 'required'
    }
    else{
        const url = `https://opentdb.com/api.php?amount=${questionNum.value}&category=${categorySelect.value}&difficulty=${questionDiff.value.toLowerCase()}&type=multiple`
        console.log(url)
        get(url).then(questions =>{
            
            questionsArr = questions.results
            localStorage.setItem("questions", JSON.stringify(questionsArr))
            const image = document.getElementById("toggle");
            localStorage.setItem('paused',JSON.stringify(image.classList))
            playClick()
            let nextPage = setTimeout(function(){window.location.replace('gamescreen.html')},1000)
            // window.location.replace('gamescreen.html')
        })
    }
});
