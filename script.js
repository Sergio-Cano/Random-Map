
window.onload = () => {
    mapInit();
}

// Carga inicial del mapa
const map = L.map('map');

const mapInit = () => {
    map.setView([40.42156440652507, -3.6923618067826447], 10);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    //const marker = L.marker([40.421, -3.692]).addTo(map);
}


//Manejo DOM
const nationalButton = document.getElementById("national");
const internationalButton = document.getElementById("international");
const rouletteButton = document.getElementById("rouletteButton");
const cityList = document.getElementById("cities");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");
const op5 = document.getElementById("op5");
const op6 = document.getElementById("op6");
const destiny = document.getElementById("destiny");


//Movimiento del mapa al nuevo destino y creación de marcas
const goToChosenCity = (city) => {
    map.setView([city.lat, city.lng], 11);
    for(let i=0;i<city.places.length;i++){
        const {name, lat, lng, img, description} = city.places[i];
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`<b>${name}</b><br>${description}<br><br><img src="${img}" alt="Foto" width=200px height=200px>`);
    }
}


//Arrays de ciudades
const nationalCities = [barcelona, malaga, valencia, bilbao, sevilla, madrid];

const internationalCities = [tokio, nuevaYork, paris, elCairo, rioJaneiro, atenas];

let currentArray = nationalCities;


//Elección aleatoria de ciudad
const randomCity = () => {
    let selectedCity;
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * currentArray.length);
        selectedCity = currentArray[randomNumber];
    } while(destiny.innerText === currentArray[randomNumber].name);
    destiny.innerText = selectedCity.name;
    goToChosenCity(selectedCity);

}

rouletteButton.addEventListener('click', randomCity);


//Selección de ciudad -- Llamada desde atributo 'onchange' en el HTML
const selectCity = () => {
    const selectedCity = currentArray.find(city => cityList.value === city.name);
    destiny.innerHTML = selectedCity.name;
    goToChosenCity(selectedCity);
}


//Cambio entre destinos nacionales e internacionales
const changeOptions = (array) => {
    const arrayOptions = [op1, op2, op3, op4, op5, op6];
    for(let i=0;i<array.length;i++){
        arrayOptions[i].setAttribute("value",array[i].name);
        arrayOptions[i].innerText = array[i].name;
    }
}

nationalButton.addEventListener('click', () => {
    currentArray = nationalCities;
    changeOptions(currentArray);
    nationalButton.style.backgroundColor = "yellow";
    internationalButton.style.backgroundColor = "";
})

internationalButton.addEventListener('click', () => {
    currentArray = internationalCities;
    changeOptions(currentArray);
    nationalButton.style.backgroundColor = "";
    internationalButton.style.backgroundColor = "yellow";
})