const baseUrl = 'https://ghibliapi.herokuapp.com/vehicles'
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
    let description = document.createElement("p");
    let vehicle_class = document.createElement("p");
    let length = document.createElement("p");

    


    name.textContent = 'Name: ' + json[i].name;
    description.textContent = 'Description: ' + json[i].description;
    vehicle_class.textContent = 'Vehicle Class: ' + json[i].vehicle_class;
    length.textContent = 'Length: ' + json[i].length;

    article.appendChild(header);
    header.appendChild(name);
    header.appendChild(description);
    header.appendChild(vehicle_class);
    header.appendChild(length);
    section.appendChild(article);
        }
    }  
}

