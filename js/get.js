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
let questionsArr=[];