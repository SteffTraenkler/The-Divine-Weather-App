import { useCurrentLocation } from "../api/apifetches/CurrentLocation"
import useGeolocation from "../hooks/useGeolocation"

export default function MainPage() {
    const testLocation = useCurrentLocation()

    // console.log("useGeoLocation", useGeolocation());

    // console.log(navigator.geolocation);



    return (
        <>
            <h1>Main Content</h1>
            <section className="container02">
                <h1 id="aktuelleStadt">Deine Stadt</h1>
                <h2>{testLocation}</h2>
            </section>
        </>
    )
}