import React from "react";

// import subcomponent named "widgetChild"
import WeatherMiniCard from "./WeatherMiniCard"
// // import helperfunctions if there are
// import {someHelperFn} from "./WeatherCard.helpers"

// // import constants if there are
// import {SOME_CONSTANT} from "./WeatherCard.constants"



interface Props {
//   dummyProp: string;
     // [key: string]: string;
     loading: Boolean;
     weather: {[key: string]: string|number},
     description: string
}

const properties = ['pressure' , 'humidity' , 'air quality']

interface Weather {
     [key: string]: string|number;
}

const WeatherCard: React.FC<Props>  = ({loading,weather,description}) => {
     // console.log("description: ",description)
     const {temp,temp_min,temp_max,pressure,humidity}: Weather = weather
    
     /*
     A sub-component used exclusively by WeatherCard.js ( or other components
          in this directory)
     */
//     console.log("minimum temperature: " , temp_min)
//     console.log("maximum temperature: " , temp_max)
//     console.log("pressure: " , pressure)
//     console.log("humidity: " ,humidity )
//     console.log("weather: " , weather)
//     console.log("loading: " ,loading)
     return (
          <div className="w-80 rounded-lg bg-orange-100 p-6 relative">
          <p className="text-xs">What's the weather?</p>

          <span className="mt-6 flex items-center gap-2">
           {temp == ''? (<span className="w-32 h-16 bg-slate-200 mb-2 rounded-md animate-pulse"></span>) :   (<p className="text-4xl font-semibold"> 
              {temp}<sup>o</sup>C
            </p>)}
            {/* <p className="inine-block rounded-full bg-white py-1 px-2 text-[0.7em]">
              {temp_min}<sup className="text-inherit">o</sup>C
            </p> */}
          </span>

          {
               description == '' ? (<span className="animate-pulse w-28 block h-4 bg-slate-200 rounded"></span>):(
                    <p className="text-xs capitalize">{description}</p>)
          }

          <div className="mt-20 relative bg-slate-400 flex justify-between ">
               <WeatherMiniCard property="Pressure" value={pressure}/> 
               <WeatherMiniCard property="Humidity" value={humidity}/> 
               <WeatherMiniCard property="Max Temp" value={temp_max}/> 
               {/* <WeatherMiniCard property="" value={pressure}/>  */}
            {/* {properties.map( (property,index) => <WeatherMiniCard property={property} value={800} key={index}/>
            )} */}
            </div>
            
        </div>
     )

}

export default WeatherCard;