let input = document.getElementById("input-box");
let temp = document.getElementById("temp-value");
let locele = document.getElementById("location");
let desc = document.getElementById("weather-desc");
let butn = document.getElementById("search");
let pres = document.getElementById("pressure");
let hum = document.getElementById("humiditys");
let sea = document.getElementById("sealevel");
let feel = document.getElementById("feelslike");
const apiKey = 'ac6f0d56fdd5bf2a1e788f9c3a57f47b';
butn.onclick=function(){
    if(input.value =="")
        alert("Enter the location.");
    else{
        loc = input.value
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        fetch(url).then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.main.pressure)
            const{name} = data
            const pressure =data.main.pressure;
            const humidity = data.main.humidity;
            const sealevel = data.main.sea_level;
            const feelslike = data.main.feels_like;
            console.log(pressure);
            console.log(humidity);
            const{feels_like} = data.main
            const{description} = data.weather[0]
            temp.innerHTML = Math.floor(feels_like-273);
            locele.innerHTML = name;
            pres.innerHTML=pressure;
            hum.innerHTML=humidity ;
            sea.innerHTML=sealevel;
            feel.innerHTML=feelslike;
            desc.innerHTML = description
        })
        .catch(()=>{
            alert("Enter valid location")
        }) 
        input.value = ""
    }
}
