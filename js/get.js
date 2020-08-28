

function get(url){
    //fetch the data
    return fetch(url)
        .then(function(response){ //run the json from response
            return response.json();
        })
        .then(function(data){
            return data;
        })
    }



const questionPageHTML = `<div class="wrapper" id="wrapper">
<div class="question" id="question">
    <h1>Question goes here?</h1>
</div>
<div class="answers" id="answers">
    <button type="button" class="btn" id="btn">Answer 1</button>
    <button type="button" class="btn" id="btn">Answer 2</button>
    <button type="button" class="btn" id="btn">Answer 3</button>
    <button type="button" class="btn" id="btn">Answer 4</button>
</div>
<div class="submit" id="submit">
    <button type="button" class="btnSubmit" id="btnSubmit">Submit</button>
</div>
<div class="result" id="result">>
</div>
</div>`