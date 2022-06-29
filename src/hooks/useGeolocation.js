import { useEffect, useState } from "react"

const useGeolocation = () => {
    const [geolocation, setGeoLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lon: "" }
    })

    const onSuccess = (location) => {
        setGeoLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lon: location.coords.longitude
            }
        })
    }

    const onError = error => {
        setGeoLocation({
            loaded: true,
            error,
        })
    }

    const geoOptions = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported by Browser",
            })
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError, geoOptions)  //NOTE!!: if you use watchPosition instead of getCurrentPosition this hook will update itself on and on ->  and therefore also the useEffect. Depends, if we want to use this? In terms of performance?
    }, [])

    return geolocation
}

export default useGeolocation