import React from "react";


import { MdOutlineSearch, MdMyLocation } from "react-icons/md";
// import subcomponent named "widgetChild"
import SearchBar from "./SearchBar"

// import helperfunctions if there are
import {someHelperFn} from "./Widget.helpers"

// import constants if there are
import {SOME_CONSTANT} from "./Widget.constants"



interface Props {
     loading: Boolean;
  location: string;
}

const Widget: React.FC<Props>  = ({location,loading}) => {
     /*
     A sub-component used exclusively by Widget.js ( or other components
          in this directory)
     */
     return (
          <header className="flex w-full items-center justify-between p-4 py-10 ">
            <h2>Welcome!</h2>
            <div className="items- flex">
              <MdMyLocation className="text-lg" />
              {/* <MdMyLocation className="text-lg inline-block"/> */}
              {/* <p className="pl-1 text-sm inline-block ">London</p> */}
              <p className="inline-block pl-1 text-sm ">
                {loading ? "....Loading" : location}
              </p>
            </div>
            <SearchBar/>
          </header>

     )

}

export default Widget;