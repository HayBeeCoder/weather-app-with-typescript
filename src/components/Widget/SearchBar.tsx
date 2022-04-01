import React from "react";

interface Props {
  dummyProp: string;
}

const SearchBar: React.FC<Props>  = ({dummyProp}) => {
    /*
    A sub-component used exclusively by Widget.js ( or other components
         in this directory)
    */

    return (
        <div>
            {dummyProp}
        </div>
    )


}

export default SearchBar;