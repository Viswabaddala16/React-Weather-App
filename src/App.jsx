import { useState } from 'react';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';

function App() {
  const[weather,setWeather] = useState();
  const[city,setCity] = useState();

  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  const apiKey= import.meta.env.VITE_API_KEY;
  
  const fetchWeather = async function (){

    if(!city){
      return alert("Please Enter a City Name");
    }
    try{

      const response = await axios.get(`${BASE_URL}`, {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric'
        }
      });
      setWeather(response.data);

    }catch(err){
      if(err.response?.status === 401){
        alert("Invalid API Key  or Key not yet active");
      } else {
        alert("City is Not Found");
      }
      
    }
  };
  return (
    < >
      <div className='bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg'>
        <Header setCity={setCity} city={city} fetchWeather={fetchWeather}/>

        {weather && <Main data={weather}/>}
        {weather && <Footer data={weather}/>}
      </div>
      
    </>
  )
}

export default App
