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
createTable();
let city = cities.find(city => city.name == userWritesACityName);
let matchedCityIndex = -1;

if (city) {
    h2.textContent = `${city.name} (${city.country})`;
    title.textContent = `${city.name}`;

    matchedCityIndex = cities.findIndex(city => city.name === userWritesACityName);
    if (matchedCityIndex != -1) {
        userWritesACityName = matchedCityIndex;
        console.log(`Staden hittades. Indexet är: ${userWritesACityName}`);
    } else {
        console.log("Staden hittades ej.");
    }
} else {
    h2.textContent = `${userWritesACityName} finns inte i databasen`;
    title.textContent = "Not Found";
    h3.innerHTML = "";
}

//Gör så att knappen med staden som promptet anger ska få svart bakgrundsfärg
let oneOfTheseBoxesWillBecomeBlackAndWhite = document.querySelectorAll(".cityBox");

oneOfTheseBoxesWillBecomeBlackAndWhite.forEach(box => {
    if (box.textContent == `${userWritesACityName}`) {
        box.classList.add("target");
    }
});let maxDistanceCounter = 0;
let indexThatTheCityFurthestAwayHas = -1;
let cityFurthestAway = 0;
for (let i = 0; i < distances.length; i++) {
    if (userWritesACityName === cities[distances[i].city1].name || userWritesACityName === cities[distances[i].city2].name) {
        cityFurthestAway = (userWritesACityName === cities[distances[i].city1].name) ? distances[i].city2 : distances[i].city1;
    if (matchedCityIndex === distances[i].city1 || matchedCityIndex === distances[i].city2) {
        let oppositeCityOfMatchedCityAndMaybeCityFurthestAway = (distances[i].city1 === matchedCityIndex)
            ? distances[i].city2
            : distances[i].city1;

        if (distances[i].distance > maxDistanceCounter) {
            maxDistanceCounter = distances[i].distance;
            indexThatTheCityFurthestAwayHas = cityFurthestAway
            indexThatTheCityFurthestAwayHas = oppositeCityOfMatchedCityAndMaybeCityFurthestAway;
        }
    }
}
if (indexThatTheCityFurthestAwayHas != -1) {
    const cityBoxesCollection = document.querySelectorAll(".cityBox");
    cityBoxesCollection[indexThatTheCityFurthestAwayHas].classList.add("furthest")
}let minDistanceCounter = Infinity;
let indexThatTheCityClosestHas = -1;
for (let i = 0; i < distances.length; i++) {
    if (matchedCityIndex === distances[i].city1 || matchedCityIndex === distances[i].city2) {
        let oppositeCityOfMatchedCityAndMaybeCityClosest = (distances[i].city1 === matchedCityIndex)
            ? distances[i].city2
            : distances[i].city1;

        if (distances[i].distance < minDistanceCounter) {
            minDistanceCounter = distances[i].distance;
            indexThatTheCityClosestHas = oppositeCityOfMatchedCityAndMaybeCityClosest;
        }
    }
}
const cityBoxesList = document.querySelectorAll(".cityBox");

function changePropertiesOfThreeCityBoxes(cityBoxElement, className, textContent) {
    cityBoxElement.classList.add(className);
    cityBoxElement.textContent += textContent
}

for (let i = 0; i < cityBoxesList.length; i++) {
    const cityBoxElement = cityBoxesList[i];
    if (cityBoxElement.textContent === cities[indexThatTheCityFurthestAwayHas].name) {
        changePropertiesOfThreeCityBoxes(cityBoxElement, "furthest", ` ligger ${maxDistanceCounter / 10} mil bort `)
    }
    if (cityBoxElement.textContent === cities[indexThatTheCityClosestHas].name) {
        changePropertiesOfThreeCityBoxes(cityBoxElement, "closest", ` ligger ${minDistanceCounter / 10} mil bort `)
    }
    if (cityBoxElement.textContent === cities[matchedCityIndex].name) {
        changePropertiesOfThreeCityBoxes(cityBoxElement, "target", "")
    }
}
const closestCityInSpan = document.getElementById("closest");
const furthestCityInSpan = document.getElementById("furthest");

function changeTextContentInSpanElements(cityWithCloseDistance, cityWithLongDistance) {
    closestCityInSpan.textContent = cityWithCloseDistance;
    furthestCityInSpan.textContent = cityWithLongDistance;
}

changeTextContentInSpanElements(`${cities[indexThatTheCityClosestHas].name}`, `${cities[indexThatTheCityFurthestAwayHas].name}`)

function createTable() {
    const table = document.querySelector("#table");
    table.style.width = "100%";

    const tableRows = cities.length;
    const tableColumns = cities.length + 1;

    table.style.gridTemplateColumns = `80px repeat(${tableColumns - 1}, 1fr)`;
    table.style.gridTemplateRows = ` 20px repeat(${tableRows + 1}, 1fr)`;

    for (let a = 0; a < tableColumns; a++) {
        const columnContent = document.createElement("div");
        columnContent.classList.add("head_column", "cell");
        columnContent.style.display = "grid";
        columnContent.style.alignItems = "center";

        if (a === 0) {
            columnContent.textContent = "";
        } else {
            columnContent.textContent = cities[a - 1].id;
        }
        table.appendChild(columnContent);
    }

    for (let i = 0; i < tableRows; i++) {
        let rowContent = document.createElement("div");
        rowContent.textContent = `${cities[i].id} - ${cities[i].name}`;
        rowContent.classList.add("head_row", "cell");
        rowContent.style.display = "grid";
        rowContent.style.alignItems = "center";

        table.appendChild(rowContent);

        for (let j = 0; j < cities.length; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.display = "grid";
            cell.style.alignItems = "center";

            if ((j + 1) % 2 === 1) {
                cell.classList.add("even_col");
            }

            let distanceValue = null;
            for (let distance of distances) {
                if (distance.city1 === cities[i].id && distance.city2 === cities[j].id) {
                    distanceValue = distance.distance;
                    break;
                }
                if (distance.city2 === cities[i].id && distance.city1 === cities[j].id) {
                    distanceValue = distance.distance;
                }
            }
            if (distanceValue != null) {
                cell.textContent = `${distanceValue / 10}`;
            } else if (i === j) {
                cell.textContent = "";
            }
            table.appendChild(cell);
        }
    }

    const allRowContentDivs = document.querySelectorAll(".head_row");
    const allCellDivs = document.querySelectorAll(".cell");

    for (let k = 2; k < allRowContentDivs.length; k += 2) {
        allRowContentDivs[k].classList.add("even_row");

        for (let l = 0; l < cities.length; l++) {
            const cellIndex = (k + 1) * (cities.length + 1) + (l + 1);
            allCellDivs[cellIndex].classList.add("even_row");
        }
    }

    let rowIndex = 0;

    for (let row of allRowContentDivs) {
        if (row.textContent == "0 - Strasbourg") {
            row.classList.add("even_row");

            for (let m = 0; m < cities.length; m++) {
                const cellIndexForStrasbourgRow = (rowIndex + 1) * (cities.length + 1) + (m + 1);
                allCellDivs[cellIndexForStrasbourgRow].classList.add("even_row");
            }
        }
        rowIndex++;
    }
}

