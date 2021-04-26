const baseUrl = 'https://ghibliapi.herokuapp.com/species'
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
    let classification = document.createElement("p");
    let eye_colors = document.createElement("p")
    let hair_colors = document.createElement("p");

    


    name.textContent = 'Name: ' + json[i].name;
    classification.textContent = 'Classification: ' + json[i].classification;
    eye_colors.textContent = 'Eye Colors: ' + json[i].eye_colors;
    hair_colors.textContent = 'Hair Colors: ' + json[i].hair_colors;

    article.appendChild(header);
    header.appendChild(name);
    header.appendChild(classification);
    header.appendChild(eye_colors);
    header.appendChild(hair_colors);
    section.appendChild(article);
        }
    }  
}

