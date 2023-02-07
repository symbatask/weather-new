import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Home = ({ city }) => {
    const [weather, setWeather] = useState({})

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c15601da476242f8e33e17e82e4421e2`)
            setWeather(data)
        }
        getData()
    }, [city])

  console.log(weather.weather)


    return (
        <div className='home'>
            <div className='container'>
             <p className='home__city'>
                   {city}
               </p>
           <div className="home__wrapper">
              
          <div>
          <p className='home__temp'>
            {Math.round(weather?.main?.temp - 273) } °C
            </p>
            <p>
            { weather?.weather && weather?.weather[0].description
            
            }
            </p>
            <p>
            {weather?.main?.humidity}%
            </p>
          </div>
          <div>
              <img src={weather?.weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
          </div>

           </div>
            
        </div>
        </div>
    )
}


export default Home