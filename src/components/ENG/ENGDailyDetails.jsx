export default function EngDailyDetails(props) {

    return (
        <section className="container05">
            <article className="details">
                <div className="dBox">UV-Index:
                    <br />{props.data.daily[0].uvi.toString().replace(".", ",")}</div>
                <div className="dBox">Wind speed
                    <br />{props.data.current.wind_speed.toString().replace(".", ",")} {props.units === "metric" ? "m/s" : "miles/h"}</div>
                <div className="dBox">Sunrise
                    <br />
                    {new Date(props.data.current.sunrise * 1000).getHours() < 10 ?
                        "0" + new Date(props.data.current.sunrise * 1000).getHours() : new Date(props.data.current.sunrise * 1000).getHours()}
                    :{new Date(props.data.current.sunrise * 1000).getMinutes() < 10 ?
                        "0" + new Date(props.data.current.sunrise * 1000).getMinutes() : new Date(props.data.current.sunrise * 1000).getMinutes()}</div>
                <div className="dBox">Sunset
                    <br />
                    {new Date(props.data.current.sunset * 1000).getHours() < 10 ?
                        "0" + new Date(props.data.current.sunset * 1000).getHours() : new Date(props.data.current.sunset * 1000).getHours()}
                    :{new Date(props.data.current.sunset * 1000).getMinutes() < 10 ?
                        "0" + new Date(props.data.current.sunset * 1000).getMinutes() : new Date(props.data.current.sunset * 1000).getMinutes()}</div>
                <div className="dBox">Precipitation probability
                    <br />{Math.round(props.data.daily[0].pop * 100)} %</div>
                <div className="dBox">Perceived temperature
                    <br />{Math.round(props.data.current.feels_like)} °{props.units === "metric" ? "C" : "F"}</div>
                <div className="dBox">Humidity
                    <br />{props.data.daily[0].humidity} %</div>
                {/* <div className="dBox">Sichtweite</div> */}
                <div className="dBox">Air pressure
                    <br />{props.data.daily[0].pressure} hPa</div>
            </article>
        </section>
    )
}