export default function DailyDetails(props) {

    return (
        <section className="container05">
            <article className="details">
                <div className="dBox">UV-Index:
                    <br />
                    {props.data.daily[0].uvi.toString().replace(".", ",")}</div>
                <div className="dBox">Windgeschwindigkeit
                    <br />
                    {props.data.current.wind_speed.toString().replace(".", ",")} {props.units === "metric" ? "m/s" : "miles/h"}</div>
                <div className="dBox">Sonnenaufgang
                    <br />
                    {new Date(props.data.current.sunrise * 1000).getHours() < 10 ?
                        "0" + new Date(props.data.current.sunrise * 1000).getHours() : new Date(props.data.current.sunrise * 1000).getHours()}
                    :{new Date(props.data.current.sunrise * 1000).getMinutes() < 10 ?
                        "0" + new Date(props.data.current.sunrise * 1000).getMinutes() : new Date(props.data.current.sunrise * 1000).getMinutes()} Uhr</div>
                <div className="dBox">Sonnenuntergang
                    <br />
                    {new Date(props.data.current.sunset * 1000).getHours() < 10 ?
                        "0" + new Date(props.data.current.sunset * 1000).getHours() : new Date(props.data.current.sunset * 1000).getHours()}
                    :{new Date(props.data.current.sunset * 1000).getMinutes() < 10 ?
                        "0" + new Date(props.data.current.sunset * 1000).getMinutes() : new Date(props.data.current.sunset * 1000).getMinutes()} Uhr</div>
                <div className="dBox">Regenwahrscheinlichkeit
                    <br />{Math.round(props.data.daily[0].pop * 100)} %</div>
                <div className="dBox">gefühlte Temperatur
                    <br />{Math.round(props.data.current.feels_like)} °{props.units === "metric" ? "C" : "F"}</div>
                <div className="dBox">Feuchtigkeit
                    <br />{props.data.daily[0].humidity} %</div>
                {/* <div className="dBox">Sichtweite</div> */}
                <div className="dBox">Luftdruck
                    <br />{props.data.daily[0].pressure} hPa</div>
            </article>
        </section>
    )
}