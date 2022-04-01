import React from "react";

// import subcomponent named "widgetChild"
// import WidgetChild from "./WidgetChild"

// import helperfunctions if there are
// import {someHelperFn} from "./SideBar.helpers"

// import constants if there are
// import {SOME_CONSTANT} from "./SideBar.constants"

interface Props {}

const SideBar: React.FC<Props> = () => {
  /*
     A sub-component used exclusively by SideBar.js ( or other components
          in this directory)
     */
  return (
    <section className="bg-slate-100 p-4">
      <h2 className="text-xl">Favorites</h2>
      <p className="text-xs text-gray-400">
        Your favorite locations appear here
      </p>
      {/* <div className="grid h-full w-full place-items-center"> */}
      <div className="h-full w-full py-6">
        {/* <p className="text-gray-400">No favorites yet! :(</p> */}


      </div>
    </section>
  );
};

export default SideBar;
