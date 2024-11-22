// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

//Skapa en for-loop som ska gå igenom varje stad i arrayen cities
//Skapa en funktion som skapar en div för varje button

//Skapa ett prompt och för över till variabel
let userWritesACityName = prompt("Vilken stad?");
console.log("Vilken stad?", userWritesACityName);

const bigDivForNewDivs = document.querySelector("#cities");
const h2 = document.querySelector("h2");

function createCityButton(cityName) { //Hur vet programmet att cityname hänvisar till en nyckel i arrayen cities??
    const newDiv = document.createElement("div");
    newDiv.classList.add("cityBox");
    newDiv.textContent = cityName;
    bigDivForNewDivs.appendChild(newDiv) //Kan man hämta barnet genom dess id/klass??
}

for (i = 0; i < cities.length; i++) {
    createCityButton(cities[i].name)
}

for (i = 0; i < cities.length; i++) {
    if (userWritesACityName == cities[i].name) {
        h2.textContent = `${cities[i].name} (${cities[i].country})`
    }
let city = cities.find(city => city.name == userWritesACityName);

if (city) {
    h2.textContent = `${city.name} (${city.country})`;
    title.textContent = `${city.name}`;

} else {
    h2.textContent = `${userWritesACityName} finns inte i databasen`;
    title.textContent = "Not Found";
}

