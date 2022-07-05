// toggle menu

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

// date header

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

// footer last updated

const year = document.querySelector('#currentYear')

const lastmodific = document.querySelector('#currentDate');

try {
    year.textContent = new Date().getFullYear();
    lastmodific.textContent = document.lastModified;
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }

// Weather API

const OWM_API_KEY = '5eb92a32fb342431913bce6747846956';

const weatherIcon = document.querySelector('.weather-icon');
const weatherTemp = document.querySelector('.weather-temp');
const weatherCondition = document.querySelector('.weather-condition');
const windSpeed = document.querySelector('.wind-speed');
const windChill = document.querySelector('.wind-chill');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Lima&units=metric&appid=${OWM_API_KEY}`;

async function fetchWeatherData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            renderWeatherData(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    }
    
}

function renderWeatherData(data) {
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    const temp = data.main.temp.toFixed(0);
    const wSpeed = data.wind.speed.toFixed(1);
    const wChill = wSpeed ? (13.12 + (0.6215 * temp) - 11.37 * (wSpeed ** 0.16) + (0.3965 * temp) * (wSpeed ** 0.16)).toFixed(1) : 'N/A';

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    weatherTemp.textContent = temp;
    weatherCondition.textContent = desc;
    windSpeed.textContent = wSpeed;
    windChill.textContent= wChill;
}

fetchWeatherData();