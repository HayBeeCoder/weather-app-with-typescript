import React, { useEffect,useState } from "react";
import { LineChart, Line,CartesianGrid,XAxis,YAxis,Tooltip } from "recharts";
import axios from "axios";
import { FORECAST_URL,API_KEY } from "../../constant";
// import subcomponent named "widgetChild"
// import WidgetChild from "./SearchBar"

// import helperfunctions if there are
// import {someHelperFn} from "./WeatherChart.helpers"

// import constants if there are
// import {SOME_CONSTANT} from "./WeatherChart.constants"

const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 },{ name: "Page B", uv: 300, pv: 2400, amt: 2400 },{ name: "Page A", uv: 200, pv: 2400, amt: 2400 },{ name: "Page A", uv: 100, pv: 2400, amt: 2400 },{ name: "Page A", uv: 0, pv: 2400, amt: 2400 }];
interface Props {
     latitude: number;
     longitude: number;
  //   dummyProp: string;
}


const WeatherChart: React.FC<Props> = ({latitude,longitude}) => {
     const [lat,setLatitude] = useState<number>(latitude)
     const [long,setLongitude] = useState<number>(longitude)
     const [loading,setLoading] = useState(true)

    
     useEffect(()=>{
          setLoading(true)
          console.log('heloo')
          axios.get(FORECAST_URL,{
               params: {
                    units: "metric",
                    lat: latitude,
                    lon: longitude,
                    appId: API_KEY,
               }
          }) .then(function (response) {
               setLoading(false)
               const data = response.data.list;

              console.log(data)

             })
             .catch(function (error) {
               console.log(error);
             });
     },[])
     
  /*
     A sub-component used exclusively by WeatherChart.js ( or other components
          in this directory)
     */
  const renderLineChart = (
    <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 40, bottom: 0, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#fff" />
      <XAxis dataKey="name" />
      <YAxis />
      
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#cf11fc' }}/>
    </LineChart>
  );
  return (
    <>
        {loading ? (<div className="w-full h-full bg-slate-200 animate-pulse"></div>) :  renderLineChart}
        
     
    </>
  );
};

export default WeatherChart;
