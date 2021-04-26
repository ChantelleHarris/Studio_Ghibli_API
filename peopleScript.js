const baseUrl = 'https://ghibliapi.herokuapp.com/people'
let url;

const button = document.querySelector("#button");
const section = document.querySelector(".searchResults");


button.addEventListener("click", apiSearch);
    
async function apiSearch(e) {
    e.preventDefault();
    url = `${baseUrl}?limit=99`;
    
    await fetch(url)
    .then(function(fetchResults) {
        console.log(fetchResults);
        return fetchResults.json();
    })
    .then(function(json) {
        console.log(json);
        displayResults(json);
    })
}   


function displayResults(json){
    if (json.length === 0) {
        console.log('No results');
    } else {
        for (let i = 0; i < json.length; i++) {
            console.log(i);
        
    let article = document.createElement('article');
    let header = document.createElement('h2')
    let name = document.createElement("h2");
    let gender = document.createElement("p");
    let age = document.createElement("p")
    let eye_color = document.createElement("p");
    let hair_color = document.createElement("p");

    


    name.textContent = 'Name: ' + json[i].name;
    gender.textContent = 'Gender: ' + json[i].gender;
    age.textContent = 'Age: ' + json[i].age;
    eye_color.textContent = 'Eye Color: ' + json[i].eye_color;
    hair_color.textContent = 'Hair Color: ' + json[i].hair_color;

    article.appendChild(header);
    header.appendChild(name);
    header.appendChild(gender);
    header.appendChild(age);
    header.appendChild(eye_color);
    header.appendChild(hair_color);
    section.appendChild(article);
        }
    }  
}

