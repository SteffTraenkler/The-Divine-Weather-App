export default function EngDailyDetails(props) {

    return (
        <section className="container05">
            <article className="details">
                <div className="dBox">UV-Index: {props.data.daily[0].uvi.toString().replace(".", ",")}</div>
                <div className="dBox">Wind speed {props.data.current.wind_speed.toString().replace(".", ",")} {props.units === "metric" ? "m/s" : "miles/h"}</div>
                <div className="dBox">Sunrise {new Date(props.data.current.sunrise * 1000).getHours() < 10 ?
                    "0" + new Date(props.data.current.sunrise * 1000).getHours() : new Date(props.data.current.sunrise * 1000).getHours()}
                    :{new Date(props.data.current.sunrise * 1000).getMinutes() < 10 ?
                        "0" + new Date(props.data.current.sunrise * 1000).getMinutes() : new Date(props.data.current.sunrise * 1000).getMinutes()}</div>
                <div className="dBox">Sunset {new Date(props.data.current.sunset * 1000).getHours() < 10 ?
                    "0" + new Date(props.data.current.sunset * 1000).getHours() : new Date(props.data.current.sunset * 1000).getHours()}
                    :{new Date(props.data.current.sunset * 1000).getMinutes() < 10 ?
                        "0" + new Date(props.data.current.sunset * 1000).getMinutes() : new Date(props.data.current.sunset * 1000).getMinutes()}</div>
                <div className="dBox">Precipitation probability {Math.round(props.data.daily[0].pop * 100)} %</div>
                <div className="dBox">Perceived temperature {Math.round(props.data.current.feels_like)} °{props.units === "metric" ? "C" : "F"}</div>
                <div className="dBox">Humidity {props.data.daily[0].humidity} %</div>
                {/* <div className="dBox">Sichtweite</div> */}
                <div className="dBox">Air pressure {props.data.daily[0].pressure} hPa</div>
            </article>
        </section>
    )
}