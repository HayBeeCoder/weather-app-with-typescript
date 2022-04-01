import React from "react";

interface Props {
  location: string;
  temperature: { high: number; low: number };
}

const WidgetChild: React.FC<Props> = ({ location, temperature }) => {
  /*
    A sub-component used exclusively by Widget.js ( or other components
         in this directory)
    */

  return (
    <div className="flex w-full items-center gap-3 rounded-md p-4 shadow-sm shadow-slate-600">
      <div className=" h-16 w-16 flex-shrink-0 bg-gray-400"></div>
      <div className=" w-full flex-shrink self-end">
        <div>
          <p className="text-sm">
            <span className="text-xs text-gray-500">Location:</span> London
          </p>

          <div className="mt-2 flex w-full justify-between text-sm">
            <p>Cloudy</p>
            <p>
              26<sup className="text-xs">0</sup> / 29
              <sup className="text-xs">0</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetChild;
