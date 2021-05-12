import React,{useEffect,useState} from "react";
import "./index.css";

const Chal = ()=>{

  const[city,setCity] = useState(null);
  const[search,setSearch] = useState("Mumbai");

  useEffect(()=>{
  const fetchApi = async ()=>{
  	const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f96235e70b6711a73ae95e4f89371b9a`;
     const response = await fetch(url);
     const resJson = await response.json();
     //console.log(resJson);
     setCity(resJson.main);
  }

  	fetchApi();
  },[search]);

	return(<>
       <div className="box">
            <div className="inputData">
                 <input type="search" className="inputField" 
                  onChange = {(event)=>{
                       setSearch(event.target.value)   
                  }} />
              
            </div>

            {
            	!city?(<h1>No data found</h1>):
            	(
                   <div>
                        <div className="info">
          <h2 className="location">
          <i className="fas fa-street-view"></i>
          {search} 
          </h2>
          <h1 className="temp"> {city.temp}°C</h1>
          <h3 className="tempmin_max"> Min : {city.temp}°C | Max : {city.temp}°C </h3>
       </div>
       <div className="wave -one"></div>
       <div className="wave -two"></div>
       <div className="wave -three"></div>

                   </div>
            	)
            }

       </div>

       </>
	)
};

export default Chal;