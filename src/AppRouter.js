import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './SASS/main.scss';
import LandingPage from './Pages/LandingPage';
import MainPage from './Pages/MainPage';
import PageSkeleton from './Pages/PageSkeleton';
import useGeolocation from './hooks/useGeolocation';
import { useEffect, useState } from 'react';
import { key } from "./api/key"

function AppRouter() {
  const geolocationResult = useGeolocation()
  const currentPosition = `lat=${geolocationResult.coordinates.lat}&lon=${geolocationResult.coordinates.lon}`
  const [coordinates, setCoordinates] = useState("")
  const [lang, setLang] = useState('de')
  const [units, setUnits] = useState("metric")

  useEffect(() => {
    if (geolocationResult.loaded) {
      setCoordinates(currentPosition)
    }
  }, [geolocationResult.loaded])

  console.log(geolocationResult.loaded);

  const [data, setData] = useState([])

  const url = `https://api.openweathermap.org/data/2.5/onecall?${coordinates}&appid=${key}&units=${units}&lang=${lang}`

  console.log(url);

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(weatherData => {
        console.log(weatherData);
        setData(weatherData)
      })

  }, [coordinates, units, lang])

  console.log("AppRouter", data);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PageSkeleton
          coordinates={coordinates} setCoordinates={setCoordinates}
          lang={lang} setLang={setLang}
          units={units} setUnits={setUnits}
          data={data} setData={setData}
        />}>

          <Route index element={<LandingPage
            coordinates={coordinates} setCoordinates={setCoordinates}
            units={units}
            lang={lang} setLang={setLang}
            data={data} setData={setData}
          />} />
          <Route path="home" element={<MainPage
            coordinates={coordinates} setCoordinates={setCoordinates}
            units={units}
            lang={lang} setLang={setLang}
            data={data} setData={setData}
          />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
