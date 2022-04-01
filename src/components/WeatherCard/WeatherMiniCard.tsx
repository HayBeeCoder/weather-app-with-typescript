import React from "react";

interface Props {
  value: number | string;
  property: string
}

const WeatherMiniCard: React.FC<Props>  = ({property,value}) => {
    console.log(value)
    /*
    A sub-component used exclusively by Widget.js ( or other components
         in this directory)
    */

    return (
        <div className="text-center inline-block rounded-lg bg-white p-[0.7em]">
              <p className="mb-1 text-xs">{property}</p>
              <p>{ value == '' ? (<span className="block w-full h-4 animate-pulse bg-slate-200 rounded"></span>):value}</p>
            </div>
    )


}

export default WeatherMiniCard;