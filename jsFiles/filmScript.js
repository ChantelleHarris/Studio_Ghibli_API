const baseUrl = 'https://ghibliapi.herokuapp.com/films'
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
    let title = document.createElement("h2");
    let description = document.createElement("p");
    let director = document.createElement("p")
    let release_date = document.createElement("p");

    


    title.textContent = 'Title: ' + json[i].title;
    description.textContent = 'Description: ' + json[i].description;
    director.textContent = 'Director: ' + json[i].director;
    release_date.textContent = 'Release Date: ' + json[i].release_date;

    article.appendChild(header);
    header.appendChild(title);
    header.appendChild(description);
    header.appendChild(director);
    header.appendChild(release_date);
    section.appendChild(article);
        }
    }  
}

