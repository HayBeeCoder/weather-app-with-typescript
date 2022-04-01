
import React, { useState,useRef, useEffect } from "react";

import { Autocomplete} from "../../../Types/google.maps"
// import {} from ""
 /// <reference path="google.maps/index.d.ts" />
 
let autoComplete: Autocomplete

interface Props {
  //   dummyProp: string;
}

const handleGoogleScriptLoad = (setInput: React.Dispatch<React.SetStateAction<string>> , inputRef: React.RefObject<HTMLInputElement>): void => {
  const options  = {
    types: ["(cities)"],
    fields: ["place_id", "geometry", "name"]

  }

  const inputElement = inputRef.current
  autoComplete = new (window as any).google.maps.places.Autocomplete(inputElement ,options)
  autoComplete.addListener("place_changed", () => handlePlaceSelect(setInput)) 
}

const handlePlaceSelect = async (setInput: React.Dispatch<React.SetStateAction<string>>): Promise<void> => {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  setInput(query)
  console.log(addressObject)
}




const SearchBar: React.FC<Props> = ({}) => {
    const [input,setInput] = useState<string>('')

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      handleGoogleScriptLoad(setInput,inputRef)
    },[])
   
  return (
    <>
     <form className="relative w-2/5 md:w-1/3">
      <input
        type="search"
        name="location"
        id="location"
        ref={inputRef}
        className="inline-block w-full rounded-md p-2 shadow-sm shadow-slate-300 placeholder:text-sm placeholder:font-normal"
        placeholder="search location..."
        onChange={(e) => setInput(e.target.value)}
        value= {input}
        />
      {/* <MdOutlineSearch className="absolute text-lg top-1/2 text-black right-0 transform -translate-y-1/2 pr-2 box-content"/> */}
    </form>
        </>
  );
};

export default SearchBar;
