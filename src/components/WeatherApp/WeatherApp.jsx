import React, { useState } from "react";
import './WeatherApp.css'

import search_icon from "../Assets/searchn.png";
import cloud_icon from "../Assets/cloudnew.png";
import rainy_icon from "../Assets/rainnew.png";
import clear_icon from "../Assets/sunnew.png";

const WeatherApp = () => {
    let api_key = "86dfcc6cbf7afb6a05f7c66f5245f53e";
    const [wicon,setwicon]= useState(cloud_icon);

    const search = async() =>{
        const element =document.getElementsByClassName("city-input")
        if(element[0].value===""){
            return 0;
        }
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
        const humidity =document.getElementsByClassName("humidity-percent");
        const wind =document.getElementsByClassName("wind-rate");
        const temperature =document.getElementsByClassName("weather-temp");
        const location =document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML = Math.floor(data.wind.speed)+"km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp)+"°c";
       location[0].innerHTML = data.name;

       if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
       {
         setwicon(clear_icon);
       }
       else  if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
       {
         setwicon(cloud_icon);
       }
       else  if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
       {
         setwicon(rainy_icon);
       }
       else  if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
       {
         setwicon(rainy_icon);
       }
       else  if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
       {
         setwicon(rainy_icon);
       }
       else  if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
       {
         setwicon(rainy_icon);
       }
       else {
        setwicon(clear_icon);
       }
    }

    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="city-input" placeholder="Search" />
                <div className="search-icon" onClick={() =>(search())}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">24°c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src="" alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src="" alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">18km/h</div>
                        <div className="text">Wind speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
