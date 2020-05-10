// open weather map api key   cdfe383ca25f25f46771d830eb67e2d4
//  base url  api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const api ={
    key:"cd*******************4",
    base:"https://api.openweathermap.org/data/2.5/"

}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt){
    if(evt.keyCode==13){
        console.log(searchbox.value);
        getResults(searchbox.value)
    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json()
       
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);

let city = document.querySelector('.location .city');
city.innerText = `${weather.name},${weather.sys.country}`;

let now = new Date();
let date = document.querySelector('.location .date');

const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(now)
const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(now)
const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(now)

date.innerText =`${da}-${mo}-${ye}`;

let temp = document.querySelector('.current .temp');
temp.innerHTML= `${Math.round(weather.main.temp).toFixed(0)}<span>°</span>`;

let weather_el = document.querySelector('.current .weather');
weather_el.innerText = weather.weather[0].main;

let hilow = document.querySelector('.hi-low');
hilow.innerText = `${Math.round(weather.main.temp_min)}°C  / ${Math.round(weather.main.temp_max)}°C`;




}