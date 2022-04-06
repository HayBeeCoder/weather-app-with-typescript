import React, { useEffect, useState, useCallback } from "react";
import Nav from "../Nav";
import SideBar from "../SideBar";
// import { MdOutlineSearch, MdMyLocation } from "react-icons/md";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../constant";
import Header from "../Header";
import WeatherCard from "../WeatherCard";
import WeatherChart from "../WeatherChart";

// interface Main {
//   temp_min: string;
//   temp_max: string;
//   pressure: string;
//   humidity: string;
// }

interface ApiData {
  main: {
    temp: string;
    temp_min: string;
    temp_max: string;
    pressure: string;
    humidity: string;
  };
  weather: { [key: string]: string }[];
}

// const initialMain =
const App: React.FC = () => {
  const [apiData, setApiData] = useState<ApiData>({
    main: { temp: "", temp_min: "", temp_max: "", pressure: "", humidity: "" },
    weather: [{ description: "" }],
  });

  console.log(apiData);
  const [location, setLocation] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(true);
  const [locationData, setlocationData] = useState<{
    lat: number;
    long: number;
  }>({ lat: 0, long: 0 });

  const success = (data: {
    coords: { latitude: number; longitude: number };
  }) => {
    // const success = (data: {
    //   coords: { latitude: number; longitude: number };
    // }) => {
    console.log("sultan");
    const { latitude, longitude } = data.coords;
    setlocationData({ lat: latitude, long: longitude });
    console.log(latitude, longitude);

    axios
      .get(BASE_URL, {
        params: {
          units: "metric",
          lat: latitude,
          lon: longitude,
          appId: API_KEY,
        },
      })
      .then(function (response) {
        const {
          name,
          main,
        }: { name: string; main: { [key: string]: string | number } } =
          response.data;
        const { country }: { country: string } = response.data.sys;
        // const {country: string} = / res
        setLoading(false);
        console.log(main);
        console.log(response.data);
        setLocation(name + "," + country);
        setApiData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    if (!navigator.geolocation) {
      console.log("Geolocation not supported on this device");
      setLocation(location);
    } else {
      console.log("Geolocation supported on this device :)");
      navigator.geolocation.getCurrentPosition(success);
      // navigator.geolocation.getCurrentPosition(success,(err) => console.log(err));
    }
  }, []);

  return (
    <>
      <figure className="fixed p-2">
        <a className="text-xl font-semibold" href="/">
          W.
        </a>
      </figure>
      <Nav />
      <main className=" grid w-full grid-cols-[1fr_350px] ">
        <div>
          {/* <header className="flex w-full items-center justify-between p-4 py-10 ">
            <h2>Welcome!</h2>
            <div className="items- flex">
            <MdMyLocation className="text-lg" />
               <p className="inline-block pl-1 text-sm ">
               {loading ? "....Loading" : location}
              </p>
              </div>
              <div className="relative w-2/5 md:w-1/3">
              <input
              type="search"
                name="location"
                id="location"
                className="inline-block w-full rounded-md p-2 shadow-sm shadow-slate-300 placeholder:text-sm placeholder:font-normal"
                placeholder="search location..."
                />
                </div>
              </header> */}
          <Header location={location} loading={loading} />

          <section className=" flex items-stretch gap-3 p-3">
            <WeatherCard
              weather={apiData.main}
              loading={loading}
              description={apiData.weather[0].description}
            />
            
      <div className="flex-grow rounded-lg ">
            {!loading ? (<WeatherChart latitude={locationData.lat} longitude={locationData.long}/>) : (<div className="w-full h-full bg-slate-200 animate-pulse"> </div>)}
            </div>
          </section>
          <section className="mt-9">
            <h2 className="px-3 text-lg font-semibold capitalize">
              Next five days
            </h2>
            {/* <div>{JSON.stringify(apiData)}</div> */}
          </section>
        </div>

        <SideBar />
      </main>
    </>
  );
};

export default App;
