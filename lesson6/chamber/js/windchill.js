function calculateWindChill(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) + (0.4275 * temperature - 35.75)  *  windSpeed ^ 0.16;
  }

const temp = 40,
windSpeed = 5;

console.log(
  `The chill factor for temperature "${temp}" and wind speed "${windSpeed}" is "${calculateWindChill(temp, windSpeed)}".`
);

document.getElementById("windChill").innerHTML = `The chill factor for temperature "${temp}" and wind speed "${windSpeed}" is "${calculateWindChill(temp, windSpeed)}".`