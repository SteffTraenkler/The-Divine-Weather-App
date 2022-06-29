import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import useGeolocation from "../hooks/useGeolocation"
import { key } from "../api/key"

export default function PageSkeleton() {
    const geolocationResult = useGeolocation()
    const currentPosition = `lat=${geolocationResult.coordinates.lat}&lon=${geolocationResult.coordinates.lat}`
    const [coordinates, setCoordinates] = useState(currentPosition)
    const [lang, setLang] = useState('de')
    const [units, setUnits] = useState("metric")

    const [data, setData] = useState([])

    // console.log("units", units);
    // console.log("language", lang);

    const url = `http://api.openweathermap.org/data/2.5/onecall?${coordinates}&appid=${key}&units=${units}&lang=${lang}`


    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(weatherData => {
                console.log(weatherData);
                setData(weatherData)
            })

    }, [coordinates, units, lang])


    return (
        <>
            <header>
                <nav>
                    <form>
                        <select value={lang} onChange={e => setLang(e.target.value)}>
                            <option value={"de"}>DE</option>
                            <option value={"en"}>EN</option>
                        </select>
                    </form>
                    <form>
                        <select value={units} onChange={e => setUnits(e.target.value)}>
                            <option value={"metric"}>Celsius&meter/sec</option>
                            <option value={"imperial"}>Fahrenheit&miles/hour</option>
                        </select>
                    </form>
                </nav>
            </header>

            <main>
                <Outlet coordinates={coordinates} setCoordinates={setCoordinates} lang={lang} setLang={setLang} />
            </main>

            <footer>
                <div className="intro">
                    <p>
                        <img src="assets/img/dog.png" /> &copy;2022 Created with Love
                    </p>
                </div>
            </footer>
        </>
    )
}