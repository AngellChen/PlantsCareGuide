const btn = document.querySelector('button');
let lat, long;
btn.addEventListener("click", ()=>{
  if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(onSuccess, onError);   
  }
  else{
    alert("no");
  }
})
function onSuccess(position) {
  let lat = position.coords.latitude;
    let long = position.coords.longitude;
  // console.log(lat);
  // console.log(long);
 api = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&exclude=minutely&appid=41559670b565b182c278866ee3299b0b';
  console.log(api);
  getData();
}
function onError() {
  alert("ah");
}
function getData() {
  fetch(api).then(response => response.json()).then(info => weather(info));
}
function weather(info) {
console.log(info);
  
document.getElementById("show").innerHTML += ("Current Humidity is: "+ info.current.humidity + "%");
  console.log();

let result = info.current.humidity;
  console.log(result);
  document.getElementById("water").innerHTML += ( result );
if (result < 40) {
  document.getElementById("advice").innerHTML += "Recommendation: The current humidity is low, need to pay attention to moisturizing. Please take care of watering.";
} else if (result > 60) {
  document.getElementById("advice").innerHTML += "Recommendation: With the current high humidity, plants do not need to be watered.";
} else if (result >= 40 && result <= 60) {
  document.getElementById("advice").innerHTML += "Recommendation: The current humidity is the most suitable for plants, no watering is needed.";
} else {
  document.getElementById("advice").innerHTML += "There are no current recommendations to offer.";
}
}

//greeting//
let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow >= 18){
  greeting = "Good evening";
} else if (hourNow >= 12){
  greeting = "Good afternoon";
} else if (hourNow >= 6){
  greeting = "Good morning";
} else {
  greeting = "welcome";
}
document.getElementById("greeting").innerHTML = greeting;

//Beginning of the code from https://stackoverflow.com/questions/40344958/css-show-element-by-clicking-button
function check(){
  text = document.getElementById("check");
  text.style.display = 'block';
  }
//Ending of the code from https://stackoverflow.com/questions/40344958/css-show-element-by-clicking-button