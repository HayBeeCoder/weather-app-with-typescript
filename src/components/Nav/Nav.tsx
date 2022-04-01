import React from "react";
import { IconContext } from "react-icons";
import { MdHome, MdExplore, MdLocationCity, MdLightbulb } from "react-icons/Md";

// import subcomponent named "widgetChild"
// import WidgetChild from "./WidgetChild";

// import helperfunctions if there are
// import { someHelperFn } from "./Nav.helpers";

// import constants if there are
// import { SOME_CONSTANT } from "./Nav.constants";

interface Props {

}

const Nav: React.FC<Props> = ({  }) => {
  /*
     A component
     */
  return (
       <IconContext.Provider value={{className: "text-gray-400 text-2xl hover:text-blue-700"} }  >

    <section className="h-screen w-max px-2 flex flex-col justify-center gap-6 " >
      <button type="button" className="">
        <MdHome />
      </button>
      <button type="button" className="">
        <MdHome />
      </button>
      <button type="button" className="">
        <MdHome />
      </button>
      <button type="button" className="">
        <MdHome />
      </button>
      {/* <MdExplore />
      <MdLocationCity />
      <MdLightbulb /> */}
    </section>
       </IconContext.Provider >
  );
};

export default Nav;
