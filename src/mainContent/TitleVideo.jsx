import React from "react";
import { PiPlayThin } from "react-icons/pi";
import { PiInfoFill } from "react-icons/pi";

function TitleVideo({ overview, title }) {
  return (
    <div className="absolute w-full aspect-video">
      <div className="w-full mx-auto pt-10 md:pt-20 lg:pt-20 px-4">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold text-white text-center">{title}</h1>
          <p className="text-white w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mt-3 text-center">
            {overview.length >= 200 ? (
              <span>{overview?.substr(0, 130)}...</span>
            ) : (
              <span>{overview}</span>
            )}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center mt-10">
          <div className="flex items-center justify-center text-center gap-2 bg-white px-6 py-2 font-medium rounded-md hover:bg-opacity-65">
            <PiPlayThin size={29} />
            <button>Play</button>
          </div>
          <div className="flex items-center justify-center text-center bg-slate-200 px-6 py-2 font-medium rounded-md opacity-70 hover:opacity-50">
            <PiInfoFill size={29} />
            <button>Watch more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleVideo;
