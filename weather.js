let searchbox = document.querySelector("#srh_loc") //get the search value
let searchbtn = document.querySelector("#srh_btn")
let weatherbox = document.querySelector("#weather")
let intro = document.getElementById("intro")

//hide warther box at first
weatherbox.style.display = "none"

//show intro box
intro.style.display = "flex"

searchbtn.addEventListener ('click' , async function () {

    if(searchbox.value.length === 0){
        alert("Enter Your City")
    }
    else{
        //api call
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${searchbox.value}&key=632d15cdd79843eb854125259242810`)
        const data = await response.json();
        console.log(data)
        searchbox.value = "";  // Clears the input box

        if(data.error){
            alert(data.error.message)
        }
        else{
            //showing weather box
            weatherbox.style.display = "flex"

            //show intro box
            intro.style.display = "none"

            //Main Api Call

            weatherbox.innerHTML = `

            <div id="location" class="weather">
        <p>Loaction : <span id="loc">${data.location.name}</span></p>
        <p>Region :  <span id="reg">${data.location.region}</span></p>
        <p>Country : <span id="coun">${data.location.country}</span></p>
        <p>Local DT : <span id="dt">${data.location.localtime}</span></p>
    </div>

    <div id="temp" class="weather">
        <p>Tempreature : <span id="tem">${data.current.temp_c}</span>&nbsp;&#176;C</p>
        <p>Min Temp    : <span id="mtemp">${data.current.dewpoint_c}</span>&#176;C</p>
        <p>Real Feel   : <span id="feel">${data.current.feelslike_c}</span>&#176;C</p>
        <p>Humidity    : <span id="humy">${data.current.humidity}</span></p>
    </div>

    <div id="others" class="weather">
        <p id="p_con"><img src="${data.current.condition.icon}"><span id="con">${data.current.condition.text}</span></p>
        <p>Cloud : <span id="cld">${data.current.cloud}</span>%</p>
        <p>UV : <span id="uv">${data.current.uv}</span></p>
        <p>Wind Speed : <span id="ws">${data.current.wind_kph}</span> kph</p>
    </div>

            `
        }

        
let tem = document.getElementById("tem")

        if (data.current.temp_c >= 40) {
            tem.style.color = "red";
        }else if (data.current.temp_c > 20 && data.current.temp_c < 40 ) {
            tem.style.color = "Orange";
        }else{
            tem.style.color = "blue";
        }

    }
    
})
