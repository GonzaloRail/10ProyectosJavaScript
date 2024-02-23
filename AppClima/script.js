const result= document.querySelector(".result");
const form= document.querySelector(".get-weather");
const nameCity= document.querySelector("#city");
const nameCountry= document.querySelector("#country");

form.addEventListener("submit", (e)=>{

    e.preventDefault();
    if(nameCity.value==="" || nameCountry.value===""){
        showError("Ambos campos son obligatorios...")
        return;
    }

    callAPI(nameCity.value,nameCountry.value)


    //console.log(nameCity.value);
    //console.log(nameCountry.value);
})

function callAPI(city, country){
    const apiId="f62a8f54422c78f966909f415891f87e";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`
    //const url=`https://api.openweathermap.org/data/2.5/weather?q=Arequipa,Perú&appid=f62a8f54422c78f966909f415891f87e`
    //https://api.openweathermap.org/data/2.5/weather?q=bogota,Colombia&appid=f62a8f54422c78f966909f415891f87e

    fetch(url)
        .then(data=>{
            return data.json();
        })
        .then(dataJSON=>{
            if(dataJSON=="404"){
                showError("Ciudad no encontrada")
            }
            else{
                limpiar();
                showWeather(dataJSON);
            }
            //console.log(dataJSON);
        })
        .catch(error=>{
            console.log(error);
        })

}

function showWeather(data){
    const {name, main:{temp,temp_min,temp_max}, weather:[arr]}=data;

    const tem=convertidor(temp);
    const max=convertidor(temp_max);
    const min=convertidor(temp_min);



    const content=document.createElement("div")
    content.innerHTML=`
            <h5>Clima de ${name}</h5>
            <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="">
            <h2>${tem}°C</h2>
            <p>Max: ${max}°C</p>
            <p>Max: ${min}°C</p>
    `;

    result.appendChild(content);

    


/*
    console.log(name);
    console.log(temp);
    console.log(temp_max);
    console.log(temp_min);
    console.log(arr.icon);

 */
}

function limpiar(){
    result.innerHTML="";
}

function convertidor(k){
    return parseInt(k-273.15);
}

function showError(m){
    console.log(m);
    //Aca creamos um elemento
    const alert=document.createElement('p')
    //Aca le damos una clase y asi darle estilo en el css
    alert.classList.add('alert-message');
    //Aca le cambiamos el valor del "p" vacio al del "m" que es el mensaje de validacion
    alert.innerHTML=m;
    //Aca le añadimos lo creado al form, puede ser a cualquien elemento tambien
    form.appendChild(alert);

    setTimeout(()=>{alert.remove();}, 3000)
}

