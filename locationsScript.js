const baseUrl = 'https://ghibliapi.herokuapp.com/locations'
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
    let climate= document.createElement("p");
    let terrain = document.createElement("p")
    let surface_water = document.createElement("p");

    


    name.textContent = 'Name: ' + json[i].name;
    climate.textContent = 'Climate: ' + json[i].climate;
    terrain.textContent = 'Terrain: ' + json[i].terrain;
    surface_water.textContent = 'Surface Water: ' + json[i].surface_water;

    article.appendChild(header);
    header.appendChild(name);
    header.appendChild(climate);
    header.appendChild(terrain);
    header.appendChild(surface_water);
    section.appendChild(article);
        }
    }  
}

