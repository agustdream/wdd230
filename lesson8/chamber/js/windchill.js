//Values
var temperature=parseInt(48);
var windSpeed=parseFloat(4.0);

//Output
let t=document.querySelector("#temperature");
let s=document.querySelector("#wind");
let windChill=document.querySelector("#wind-chill");

//Wind speed
const mph=windSpeed/1.60934
const kmH=windSpeed*1.60934

//Convert Celsius-Farenheit
const toCelsius=(temperature*9/5)+32;
const toFarenheit=(temperature-32)*5/9;

//Windchill
const chill=35.74+(0.6215*temperature)-(35.75*windSpeed**0.16)+(0.4275*temperature*windSpeed**0.16);


if (temperature > 50 || windSpeed < 3.0){
    windChill.innerHTML="<p>N/A</p>";
} else{
    windChill.innerHTML=`<p>${chill.toFixed(2)} °F</p>`;
};

t.innerHTML=`<h2>${temperature} °F</h2>`;
s.innerHTML=`<p>${windSpeed} mp/h</p>`;


