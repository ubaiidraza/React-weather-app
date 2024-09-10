import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";


 


function App() {

  const val = useRef();

  const [weatherData , setWeatherData] = useState([])
  const [city , setCity] = useState("");

  const submitBtn = (e) => {

    e.preventDefault()

    setCity(val.current.value)

   

  }


  useEffect(() => {

     const apiCall = async () => {

      await axios(`https://api.weatherapi.com/v1/current.json?key=2feb46cda2064407bb560452240509&q=${city}&aqi=no`)

     .then((resp) => {
      weatherData.unshift(resp.data)
      setWeatherData([...weatherData])
      val.current.value=""
      

      
      

   
    } )
     
     .catch((err) => {
      console.log(err.message)
    })


    }

    apiCall()


  } , [city])


  



 


  



  return (


    

    <>

    <h1 className="text-2xl text-center font-bold mt-3">Weather App</h1>

    <form onSubmit={submitBtn} className="max-w-md mx-auto mt-6">
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={val}
      placeholder="Search weather..."
      required=""
    />
    <button
      type="submit"
      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Search
    </button>
  </div>

</form>


{weatherData.map((item , index) => {



    return(

 

 


  <div key={index} className="mt-10">

  <div className="weather-card " id="weather-card">
        <h3 id="city-name">{item.location.name}, {item.location.region} , {item.location.country}</h3>
        <div className="weather-icon" id="weather-icon">
          <img className="center size" src={item.current.condition.icon} alt="icon"/></div>
        <div className="temperature" id="temperature">{item.current.temp_c}°C</div>
        <div className="description" id="description">Wind Speed: {item.current.wind_kph} Kph</div>
    </div>

    
</div>


 )

  

 
  
  
})}










 

 







    </>
  )
}


export default App