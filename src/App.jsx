import { useState } from 'react';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';



  const fetchWeather = async (city,apiKey) => {

    if(!city) return null;
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
    const {data} = await axios.get(BASE_URL, {
      params: { q: city,appid: apiKey, units: "metric"}
    });
    return data;

  }

function App() {
  
  const[city,setCity] = useState("");
  const[searchCity,setSearchCity] = useState("");
  const apiKey= import.meta.env.VITE_API_KEY;

  const{data:weather,isLoading,isError,error} = useQuery({
    queryKey : ["weather",searchCity],
    queryFn: () => fetchWeather(searchCity,apiKey),
    enabled: !!searchCity,
    retry: false,
  });

  function handleSearch() {
    if(city.trim()){
      setSearchCity(city);
    }
  }
  function handleKeyDown(e)  {
    if( e.key === "Enter"){
      handleSearch();
    }

  };
   
  return (
    < >
      <div className='bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg '>
        <Header 
        setCity={setCity} 
        city={city} 
        fetchWeather={handleSearch}
        onKeyDown={handleKeyDown}/>
        {isLoading && <p className='text-blue-500'>Loading...</p>}
        {isError && <p className='text-red-700'>Error :  {error.response?.status === 404? "City is not found" : "Something went wrong"}</p>}
        {weather && 
          <>
            <Main data={weather}/>
            <Footer data={weather}/>
          </>
        }
      </div>
      
    </>
  )
}

export default App
